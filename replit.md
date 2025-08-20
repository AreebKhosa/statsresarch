# Statistical Research Portfolio Application

## Overview

This is a full-stack portfolio application for a statistical researcher, built with modern web technologies. The application showcases research projects, expertise areas, interactive data visualizations, and provides a contact form for potential collaborations. It features a responsive design with a professional academic aesthetic, interactive charts using Recharts, and a comprehensive UI component library built with shadcn/ui.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built using React with TypeScript, utilizing a component-based architecture with the following key design decisions:

- **React Router**: Uses Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management and caching
- **UI Framework**: shadcn/ui components built on top of Radix UI primitives for accessibility and consistency
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Data Visualization**: Recharts library for interactive statistical charts and graphs

The frontend follows a modular structure with sections for hero, expertise, projects, visualizations, recognition, and contact, each implemented as separate components for maintainability.

### Backend Architecture
The backend is an Express.js server with TypeScript, designed for simplicity and type safety:

- **API Framework**: Express.js with TypeScript for REST API endpoints
- **Data Storage**: Dual storage implementation with in-memory storage (MemStorage) for development and Drizzle ORM configuration for PostgreSQL in production
- **Schema Management**: Shared schema definitions using Drizzle ORM and Zod for validation
- **Development Setup**: Vite integration for hot module replacement and development server proxying

The backend currently implements contact form submission endpoints and basic user management schemas, with room for expansion to support authentication and more complex research data management.

### Build and Development Tools
The application uses a modern build toolchain optimized for full-stack development:

- **Build Tool**: Vite for fast development and optimized production builds
- **TypeScript**: Strict type checking across the entire application
- **Database Migrations**: Drizzle Kit for database schema management and migrations
- **Path Aliases**: Configured for clean imports across frontend, shared, and backend modules

### Data Architecture
The application uses a schema-first approach with shared type definitions:

- **Database Schema**: PostgreSQL tables for users and contact submissions with UUID primary keys
- **Type Safety**: Zod schemas for runtime validation and TypeScript type generation
- **Shared Types**: Common type definitions shared between frontend and backend for consistency

The current schema supports user management and contact form submissions, with the contact system being fully functional. The user system provides a foundation for future authentication features.

## External Dependencies

### Core Framework Dependencies
- **React 18**: Frontend framework with hooks and modern patterns
- **Express.js**: Backend web server framework
- **TypeScript**: Type safety across the entire application stack

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Radix UI**: Unstyled, accessible UI primitives for complex components
- **shadcn/ui**: Pre-built component library with consistent design system
- **Lucide React**: Icon library for UI elements

### Data and Forms
- **React Hook Form**: Form state management and validation
- **Zod**: Runtime type validation and schema definition
- **TanStack Query**: Server state management and data fetching
- **Recharts**: Data visualization library for interactive charts

### Database and ORM
- **Drizzle ORM**: Type-safe database toolkit for PostgreSQL
- **Neon Database**: Serverless PostgreSQL database service
- **Drizzle Kit**: Database migration and schema management tools

### Development Tools
- **Vite**: Build tool and development server
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Autoprefixer for browser compatibility

### Optional Integrations
- **Replit Integration**: Development environment optimizations for Replit platform
- **Error Handling**: Runtime error overlays and development debugging tools

The application is designed to be easily deployable to various platforms with minimal configuration changes, with the database being the primary external service dependency.