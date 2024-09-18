import React from "react";

export default function LoadingPage() {
  return (
    <div className="h-max xl:min-h-[580px] xl:col-span-4 flex items-center justify-center mt-8 xl:mt-0">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
