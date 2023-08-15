import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails(props) {
  return (
    <>
      <MeetupDetail
        image={props.meetupData.image}
        title="First meetup"
        address="Powder Gali num 5"
        description="Some example description"
      />
    </>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
        id: meetupId,
        title: "First meetup",
        address: "Powder Gali num 5",
        description: "Some example description",
      },
    },
  };
}
