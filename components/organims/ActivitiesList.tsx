import { activities } from "@/data/activities";
import { ActivityCard } from "../molecules/ActivityCard";

export function ActivitiesList() {
    return (
        <div className="grid grid-cols-6 grid-rows-8 gap-4">
            {activities.map((activity, index) => (
                <ActivityCard key={index} {...activity} />
            ))}
        </div>
    );
}
