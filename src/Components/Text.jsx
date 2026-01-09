import Cards from "./Cards";
import Searchbars from "./Searchbars";

export default function Text() {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center gap-6 ml-0">

                <h1 className="text-white text-5xl font-gilroy text-center  font-max-w-xl -mt-70">
                    Order food & groceries.Discover<br />
                    best restaurants. Diggy it!
                </h1>

                <Searchbars />

            </div>
            <div>
                <Cards />
            </div>
        </>
    );
}
