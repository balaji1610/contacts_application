import { useApplicationContext } from "@/app/context/communityContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
export default function Grid() {
  const { contacts } = useApplicationContext();
  return (
    <div>
      {" "}
      <div>
        {contacts.map((el: any) => {
          const { firstname, lastname, email, contactnumber } = el;
          return (
            <div
              style={{
                width: "284px",
                border: "1px solid rgba(0, 0, 0, 0.12)",
                borderRadius: "6px",
              }}
              key={el.id}
            >
              {" "}
              <Card variant="outlined">
                <CardContent>
                  <h1>{firstname}</h1>
                  <h1>{email}</h1>
                  <h1>{contactnumber}</h1>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
