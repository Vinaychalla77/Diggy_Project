import Text from "./Text";

export default function Background() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      
      {/* Left background image */}
      <img
        src="Veggies.png"
        className="absolute left-0 top-10 w-60 opacity-80 pointer-events-none"
        alt=""
      />

      {/* Right background image */}
      <img
        src="Sushi.png"
        className="absolute right-0 top-10 w-60 opacity-80 pointer-events-none"
        alt=""
        />
        <Text/>

    </div>
  );
}
