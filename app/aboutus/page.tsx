import Maps from "@components/Maps";

function page() {
  return (
    <main className="max-w-[70rem] mx-auto p-2 pb-10">
      <Maps ApiKey={process.env.MapsAPIKey!} MapId={process.env.MapId!} />
    </main>
  );
}

export default page;
