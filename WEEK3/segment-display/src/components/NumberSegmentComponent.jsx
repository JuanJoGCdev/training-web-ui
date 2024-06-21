import React, { useState, useEffect } from "react";

const SegmentComponent = ({ number = 0 }) => {
  const [isVisibility, setIsVisibility] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    let desactiveSegments = [0, 1, 2, 3, 4, 5, 6];

    let activeSegments = [];
    switch (number) {
      case 1:
        activeSegments = [1, 2];
        break;
      case 2:
        activeSegments = [0, 1, 3, 4, 6];
        break;
      case 3:
        activeSegments = [0, 1, 2, 3, 6];
        break;
      case 4:
        activeSegments = [1, 2, 5, 6];
        break;
      case 5:
        activeSegments = [0, 2, 3, 5, 6];
        break;
      case 6:
        activeSegments = [0, 2, 3, 4, 5, 6];
        break;
      case 7:
        activeSegments = [0, 1, 2];
        break;
      case 8:
        activeSegments = [0, 1, 2, 3, 4, 5, 6];
        break;
      case 9:
        activeSegments = [0, 1, 2, 3, 5, 6];
        break;
      case 0:
        activeSegments = [0, 1, 2, 3, 4, 5];
        break;
      default:
        activeSegments = [];
        break;
    }

    setIsVisibility((prev) => {
      const newState = [...prev];
      desactiveSegments.forEach((index) => {
        if (index >= 0 && index < newState.length) {
          newState[index] = false;
        }
      });
      activeSegments.forEach((index) => {
        if (index >= 0 && index < newState.length) {
          newState[index] = true;
        }
      });

      return newState;
    });
  }, [number]);

  const segmentClasses = [
    "w-16 h-4 absolute left-6 top-4",
    "w-4 h-16 absolute left-22 top-8",
    "w-4 h-16 absolute left-22 top-28",
    "w-16 h-4 absolute left-6 top-44",
    "w-4 h-16 absolute left-2 top-28",
    "w-4 h-16 absolute left-2 top-8",
    "w-16 h-4 absolute left-6 top-24",
  ];

  return (
    <div className="relative bg-black py-26 px-14 w-2  ">
      {segmentClasses.map((baseClass, index) => (
        <div
          key={index}
          className={`${baseClass} ${isVisibility[index] ? "bg-white" : "bg-gray-900"}`}
        ></div>
      ))}
    </div>
  );
};

export default SegmentComponent;