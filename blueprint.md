# Human+ Application Blueprint

## Overview

Human+ is a web application that provides AI-powered career advice to individual users and helps enterprise users find the best candidates for their companies.

### Individual Users
Help users assess how AI can augment their tasks with tools to increase productivity, value-add to the process and recommendations to upskill to increase employability.

### Enterprise users
Access their workforce skillsets and roles to quantify how much AI can augment to increase productivity and redesign job roles for upskilling.

## Implemented Features

*   **Routing:** The application uses `react-router-dom` for routing. It has seven routes: `/`, `/individual`, `/enterprise`, `/analysis-dashboard`, `/career-advisory`, `/about`, and `/contact`.
*   **Firebase Integration:** The application is integrated with Firebase for storing CVs.
*   **UI:** The application has a modern UI built with Tailwind CSS.
    *   **Landing Page:** A visually appealing landing page with a glassmorphism effect and animated buttons.
    *   **Individual User Page:** A form for individual users to submit their information, upload their CV, and take a personality test.
    *   **Enterprise User Page:** A login page for enterprise users and a dashboard to upload and visualize CV data.
    *   **Analysis Dashboard Page:** A page to display the analysis of an individual user's CV.
    *   **Career Advisory Page:** A page to display a detailed career advisory report.
    *   **About & Contact Pages:** Informational pages about the company and how to get in touch.
    *   **Header & Footer:** A dynamic header and a comprehensive footer for improved navigation and user engagement.

## Current Plan

### Phase 1: Backend and AI Integration

1.  **Firebase Project Setup:**
    *   Ensure a Firebase project is selected and configured for this workspace.
    *   Initialize and configure core Firebase services:
        *   **Firestore:** To store user data, CV analysis results, and other application data.
        *   **Firebase Hosting:** Confirm hosting is configured to serve the React application.
        *   **Firebase Authentication:** Set up email-based authentication for both individual and enterprise users.
2.  **Backend Logic with AI:**
    *   Initialize **Firebase AI Logic**. This will allow us to create and call AI models directly from the application.
    *   Create a backend function (as an AI Logic endpoint) that takes a user's CV as input.
    *   Inside this function, connect to a Large Language Model (LLM) to:
        *   Parse the CV.
        *   Analyze skills, experience, and potential career paths.
        *   Assess the potential for AI augmentation in the user's role.
3.  **Frontend-Backend Integration:**
    *   Modify the `IndividualUserPage` to call the new AI Logic endpoint after a CV is uploaded.
    *   Take the analysis result from the backend and display it on the `AnalysisDashboardPage`.
    *   Use the detailed analysis to generate a report on the `CareerAdvisoryPage`.
