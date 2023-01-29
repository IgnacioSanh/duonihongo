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
				path: "",
				element: <h1>Nothing to show yet</h1>,
			},
			{
				path: "library",
				element: <LibraryScreen />,
				children: [
					{
						path: ":wordId",
						element: <h1>Showing the element</h1>,
					},
				],
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<ChakraProvider>
		<RouterProvider router={router} />
	</ChakraProvider>
);
