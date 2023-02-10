import DropZoneComponents from "@components/DropZoneComponents";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="my-4 text-3x1 font-medium">
        Got a File? Share It Like Fake News
      </h1>
      <div className="flex flex-col items-center justify-center w-96 bg-gray-800 shadow-xl rounded-xl justify-xl">
        <DropZoneComponents />
        {/* render file */}
        {/* upload button */}
      </div>
    </div>
  );
}
