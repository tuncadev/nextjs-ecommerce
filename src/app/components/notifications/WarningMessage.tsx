import React from 'react';
import { Alert } from "flowbite-react";

interface WarningMessageProps {
	message: string;
}

export const WarningMessage: React.FC<WarningMessageProps> = ({ message }) => {
	return (
    <Alert color="warning" withBorderAccent className="w-full">
      <div className="w-full">
        <span className="font-medium">Ой...</span> {message}
      </div>
    </Alert>
	)
}
