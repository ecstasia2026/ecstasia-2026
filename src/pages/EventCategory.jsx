import { useParams } from "react-router-dom";

function EventCategory() {
    const { cat } = useParams();
  return (
    <div>EventCategory:{cat}</div>
  )
}

export default EventCategory