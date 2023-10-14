import React, { useState } from 'react'
import { faCheck, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showError = ({ message }) => {
    toast.error(
        <div>
            <div>
                {/* <FontAwesomeIcon icon={faExclamationCircle} className="mr-2" /> */}
                <span>{message}</span>
            </div>
        </div>,
        {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
        }
    );
};

export const showSuccess = ({ message }) => {
    toast.success(
        <div>
            <div>
                {/* <FontAwesomeIcon icon={faCheck} className="mr-2" /> */}
                <span>{message}</span>
            </div>
        </div>,
        {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
        }
    );
};
