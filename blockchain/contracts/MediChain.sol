// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract MediChain {
    struct MedicalRecord {
        uint256 id;
        address patient;
        address doctor;
        string recordType;
        string recordHash;
        uint256 timestamp;
        bool exists;
    }

    uint256 private nextRecordId = 1;

    mapping(uint256 => MedicalRecord) private records;

    // patient => doctor => access permission
    mapping(address => mapping(address => bool)) private accessPermissions;

    event MedicalRecordAdded(
        uint256 indexed recordId,
        address indexed patient,
        address indexed doctor,
        string recordType,
        string recordHash,
        uint256 timestamp
    );

    event AccessGranted(
        address indexed patient,
        address indexed doctor,
        uint256 timestamp
    );

    event AccessRevoked(
        address indexed patient,
        address indexed doctor,
        uint256 timestamp
    );

    constructor() {}

    function grantAccess(address doctor) external {
        require(doctor != address(0), "Invalid doctor address");
        require(doctor != msg.sender, "Patient cannot be doctor");

        accessPermissions[msg.sender][doctor] = true;

        emit AccessGranted(
            msg.sender,
            doctor,
            block.timestamp
        );
    }

    function revokeAccess(address doctor) external {
        require(
            accessPermissions[msg.sender][doctor],
            "Access not granted"
        );

        accessPermissions[msg.sender][doctor] = false;

        emit AccessRevoked(
            msg.sender,
            doctor,
            block.timestamp
        );
    }

    function hasAccess(
        address patient,
        address doctor
    ) public view returns (bool) {
        return accessPermissions[patient][doctor];
    }

    function addMedicalRecord(
        address patient,
        string memory recordType,
        string memory recordHash
    ) external returns (uint256) {
        require(patient != address(0), "Invalid patient address");
        require(bytes(recordType).length > 0, "Record type required");
        require(bytes(recordHash).length > 0, "Record hash required");

        require(
            msg.sender == patient ||
            accessPermissions[patient][msg.sender],
            "Doctor does not have access"
        );

        uint256 recordId = nextRecordId;

        records[recordId] = MedicalRecord({
            id: recordId,
            patient: patient,
            doctor: msg.sender,
            recordType: recordType,
            recordHash: recordHash,
            timestamp: block.timestamp,
            exists: true
        });

        nextRecordId++;

        emit MedicalRecordAdded(
            recordId,
            patient,
            msg.sender,
            recordType,
            recordHash,
            block.timestamp
        );

        return recordId;
    }

    function getMedicalRecord(
        uint256 recordId
    )
        external
        view
        returns (
            uint256 id,
            address patient,
            address doctor,
            string memory recordType,
            string memory recordHash,
            uint256 timestamp
        )
    {
        MedicalRecord memory record = records[recordId];

        require(record.exists, "Record does not exist");

        require(
            msg.sender == record.patient ||
            msg.sender == record.doctor ||
            accessPermissions[record.patient][msg.sender],
            "Not authorized"
        );

        return (
            record.id,
            record.patient,
            record.doctor,
            record.recordType,
            record.recordHash,
            record.timestamp
        );
    }

    function recordExists(
        uint256 recordId
    ) external view returns (bool) {
        return records[recordId].exists;
    }

    function getNextRecordId()
        external
        view
        returns (uint256)
    {
        return nextRecordId;
    }
}