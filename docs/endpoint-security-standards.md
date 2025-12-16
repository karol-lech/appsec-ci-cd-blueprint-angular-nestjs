# Endpoint Security Standards

Date: **2025-12-16**  
Version: **1.0**  
Status: **Active**

## 1. Overview
This standard describes the security requirements for all workstations used during the development of this project. It helps to provide a secure environment for coding and accessing the infrastructure.

## 2. Scope
This policy applies to all developers working on this project.

## 3. Device Hardening
* Full Disk Encryption (FDE) must be enabled on all developer workstations. Keys must be backed up.
* The Operating System and core applications must be set to update automatically. Patches and security updates must be installed without undue delay, but no later than 7 days from the release date of the update.

## 4. Endpoint Protection Software
* One of the approved endpoint protection software listed in point 4.1 has to be installed on every workstation from which this project is developed.
* The EPS software must be regularly updated to its latest version.
* The signature database of the EPS software must be updated at least daily.

## 4.1 Approved endpoint protection software
* Microsoft Defender for Endpoint
* ESET Endpoint Security

## 5. Integrated Development Environments (IDEs)
* Only IDEs and plugins listed in point 5.1 may be used for developing this project.
* IDEs and their plugins must be regularly updated to their latest versions.

## 5.1. Approved software and plugins:
* JetBrains WebStorm 2025.2 or newer
    * plugins authored by JetBrains
* VS Code 1.107 or newer
    * plugins listed in .vscode > extensions.json

## 6. Enforcement
Workstations of all developers are checked regularly. If any discrepancies with this document are detected, access to the project will be revoked.

## 7. Acknowledgement
Every developer working on the project must review this document at least once a year and confirm their review by making an appropriate entry in the [docs-acknowledgements.md](docs-acknowledgements.md) file.
