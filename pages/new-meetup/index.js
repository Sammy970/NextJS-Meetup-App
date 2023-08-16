import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

export default function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    return router.push("/");
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
