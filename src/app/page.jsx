import Button from './components/Button/Button';

export default function Home() {
  return (
    <>
      <div className="container mx-auto grid place-content-center min-h-screen w-1/3">
        <h1 className="text-[6rem] font-bold text-center">
          toDos: Streamline Your Tasks with Ease
        </h1>

        <h2 className="text-[2.5rem] font-medium  text-center">
          Effortlessly Create, Manage, and Prioritize Tasks for Enhanced
          Productivity
        </h2>
        <div className="grid place-content-center mt-4">
          <Button text="Get Started" href="/collections" />
        </div>
      </div>
    </>
  );
}
