"use client";
import React, { useState } from "react";
import { createOnboardingLink } from "./helpers/createOnboardingLink";
import { createOAuthLink } from "./helpers/createOauthLink";

function page() {
  const [onBoardingLink, setOnBoardingLink] = useState<string | null>(null);
  const [oAuthLink, setOAuthLink] = useState<string | null>(null);

  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <div className="flex flex-col p-10">
      <div>
        <button
          className="border cursor-pointer bg-blue-950 text-white rounded p-4"
          onClick={async () => {
            try {
              const url = await createOnboardingLink();
              setOnBoardingLink(url);
            } catch (error) {
              console.error(error);
              alert("failed to create onboarding link");
            }
          }}
        >
          Generate Onboarding Link (currently is connected to lisa's acc)
        </button>
        {onBoardingLink && <div>Send this to client: {onBoardingLink}</div>}
      </div>
      <div>
        <button
          className="border cursor-pointer bg-blue-950 text-white rounded p-4"
          onClick={async () => {
            try {
              const url = await createOAuthLink();
              setOAuthLink(url);
            } catch (error) {
              console.error(error);
              alert("failed to create onboarding link");
            }
          }}
        >
          Oath Link:
        </button>
        {oAuthLink && <div>Send this OAuth to client: {oAuthLink}</div>}
      </div>
    </div>
  );
}

export default page;
