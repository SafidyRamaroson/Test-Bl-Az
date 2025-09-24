import { activities } from "@/data/activities";
import { ActivityCard } from "../molecules/ActivityCard";

export function ActivitiesList() {
    return (
        <div className="grid max-sm:grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 xl:grid-rows-8 gap-4">
            {activities.map((activity, index) => (
                <ActivityCard key={index} {...activity} />
            ))}
        </div>
    );
}
