import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; //this is react

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			"/api": { ///api end api end  point
				target: "http://localhost:5000",//This is server call backend api
				changeOrigin: true, // this line add important
                secure: false, // if backend api is not found then this statement is create 
				
			},
		},
	},
});