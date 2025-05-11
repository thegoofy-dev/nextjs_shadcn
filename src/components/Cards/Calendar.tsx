import GitHubCalendar from "react-github-calendar";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const Calendar = () => {
    return (
        <Card className='w-xl'>
            <CardHeader>
                <CardTitle>Github Contribution</CardTitle>
            </CardHeader>
            <CardContent >
                <GitHubCalendar username="thegoofy-dev" />
            </CardContent>
        </Card>
    );
};

export default Calendar;
