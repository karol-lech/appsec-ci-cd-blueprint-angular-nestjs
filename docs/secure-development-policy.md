# Secure Development Policy

Date: **2025-12-16**  
Version: **1.0**  
Status: **Active**  

## 1. Purpose
To ensure security standards are implemented in every phase of the Software Development Lifecycle. This policy implements the controls of the OWASP SPVS Level 1.

## 2. Scope
This policy applies to all developers working on this project.

## 3. Secrets management
* Secrets must be encrypted when at rest and in transit.
* Hardcoding secrets is strictly prohibited.
* Secrets must be injected using environment variables.
* Only authorized users can view and/or manage secrets.
* Secrets must be obscured in all logs.
* A secret detection tool must run on every commit to prevent accidental exposure.

## 4. Pipeline security
All production deployments of this project must use a pipeline that enforces the following automated checks at least monthly and on every Pull Request to the master branch.

### 4.1. Automated security checks
* **Static Application Security Testing (SAST):** The source code in this repository must be statically analyzed for security issues.
* **Software Composition Analysis (SCA):** Third-party dependencies must be scanned for known vulnerabilities.
* **Secrets detection:** The entire codebase must be scanned for hardcoded secrets.
* **Infrastructure as Code (IaC) security:** Templates must be scanned for misconfigurations.
* **Dynamic Application Security Testing (DAST):** All applications in the codebase must be built and pass dynamic scanning to ensure security.

### 4.2. Tools updates and configuration
* All security tools implemented in the pipeline must be updated at least monthly for fixed version setup or set to use the newest stable release.
* Tools must fail the pipeline when high or critical-level vulnerabilities or insecure coding patterns are detected.

### 4.3. Code quality
* Linting and style checks must run automatically at least once a month.
* All linting and style detections must be solved before merging.
* All code changes require review using a Pull Request.

## 5. Deployment
* Build runners must be regularly patched and hardened.
* Production deployments must be fully automated using a pipeline and scripts to minimize errors during manual deployment.
* A Role-Based Access Control must be set up in the Version Control System.
* A .gitignore file configuration must protect against committing sensitive or unnecessary files.

## 6. Review
* This document should be checked regularly to confirm its accuracy.
* All developers are required to review this policy annually, with a concentration on the OWASP SPVS Level 1 controls.
* Complete security assessments must be conducted in accordance with this policy.

## 7. Acknowledgement
Every developer working on the project must review this document at least once a year and confirm their review by making an appropriate entry in the [docs-acknowledgements.md](docs-acknowledgements.md) file.
