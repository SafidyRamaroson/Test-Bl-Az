import { ActivitiesList } from "../organims/ActivitiesList";


export function ExploreBluAzurSection() {
    return (
        <section className="bg-[url('/pic-de-lourse.avif')] bg-cover bg-no-repeat bg-center">
            <div className="w-11/12 lg:w-3/4 mx-auto z-10 py-[75px]">
                {/* Activities List */}
                <ActivitiesList />
            </div>
        </section>
    )
}