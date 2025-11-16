



export async function createOnboardingLink() {
    try {
       const res = await fetch("api/stripe/create-onboarding-link",{
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({})
       }) 
       const data = await res.json();
       if (!res.ok) throw new Error(data.error || "Failed to create onboarding link");
       return data.url;
    } catch (error) {
        throw error;
    }
}