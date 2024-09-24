import { Skeleton } from "@nextui-org/skeleton";
import { Card, CardBody, CardFooter } from "@nextui-org/card";

const PokemonCardSK = () => {
  return (
    <Card className="max-w-[300px] w-full  ">
      <CardBody className="p-2 relative justify-center items-center">
        <Skeleton className="  w-full h-[140px] rounded-lg" />
      </CardBody>
      <CardFooter className="justify-center flex-col items-center mb-2">
        <Skeleton className="rounded-lg w-full h-8 mb-2" />

        <div className="flex flex-col items-start space-y-3 w-full">
          <div className="flex items-center space-x-2">
            <Skeleton className="rounded-lg w-16 h-3" />
            <Skeleton className="rounded-lg w-16 h-3" />
          </div>
          <div className="flex items-center space-x-2">
            <Skeleton className="rounded-lg w-16 h-3" />
            <Skeleton className="rounded-lg w-16 h-3" />
          </div>
          <div className="flex items-center space-x-2">
            <Skeleton className="rounded-lg w-20 h-3" />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PokemonCardSK;
