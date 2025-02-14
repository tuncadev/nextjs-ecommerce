"use client";

import { Alert } from "flowbite-react";

export function WarningMessage({message}) {
	return (
    <Alert color="warning" withBorderAccent className="w-full">
      <div className="w-full">
        <span className="font-medium">Oops.</span> {message}
      </div>
    </Alert>
	)
}
