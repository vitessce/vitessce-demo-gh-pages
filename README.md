## React App Setup with Vite and Vitessce

This repository demonstrates how to set up a basic [Vitessce](https://vitessce.io/) application using [Vite](https://vite.dev/guide/) and React.

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. Vitessce has been tested with Node.js versions 16 and 18. ([vitessce.io](https://vitessce.io/docs/js-overview/?utm_source=chatgpt.com))

### 📦 Project Initialization

1. ** This project was created as a Vite React Template project with the following command **:

   ```bash
   npm create vite@latest vitessce-demo-gh-pages -- --template react
   ```

2. **Navigate to the project directory**:

   ```bash
   cd vitessce-demo-gh-pages
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Install specific React versions compatible with Vitessce**:

   ```bash
   npm install react@18.0.0 react-dom@18.0.0
   ```

   Vitessce is compatible with React version 18.0.0. ([vitessce.io](https://vitessce.io/docs/js-overview/?utm_source=chatgpt.com))

5. **Install Vitessce**:

   ```bash
   npm install vitessce
   ```

### 🚀 Running the Development Server

Start the development server with:

```bash
npm run dev
```

This will start the Vite development server, typically accessible at `http://localhost:5173/`.

### 🧩 Integrating Vitessce into Your React App

To embed Vitessce into your React application:

1. **Import the Vitessce component**:

   ```javascript
   import { Vitessce } from 'vitessce';
   ```

2. **Provide a view configuration**:

   Create a JSON object that defines the layout and data sources for Vitessce. Refer to the [Vitessce documentation](https://vitessce.io/docs/js-react-vitessce/) for details on crafting view configurations.

3. **Render the Vitessce component**:

   ```jsx
   <Vitessce
     config={yourViewConfig}
     height={800}
     theme="light"
   />
   ```

   Replace `yourViewConfig` with your actual configuration object.

### 📄 Notes

- **React Version**: Ensure you're using React version 18.0.0 for compatibility with Vitessce.

- **Vite Version**: At the time of writing, the latest version of Vite is `6.3.5`. Ensure your project uses a compatible version.

- **Vitessce Documentation**: For more detailed information on integrating and configuring Vitessce, visit the [official documentation](https://vitessce.io/docs/).

