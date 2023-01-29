import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Greeting from "@/components/Greeting";
import { LibraryScreen, ErrorScreen, HomeScreen } from "@/routes";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeScreen />,
		errorElement: <ErrorScreen />,
		children: [
			{
				path: "library",
				element: <LibraryScreen />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider>
			<RouterProvider router={router} />
		</ChakraProvider>
	</React.StrictMode>
);
