// from https://stackoverflow.com/questions/51504506/too-many-react-context-providers
interface ContextComposeProps {
  contexts: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>;
  children: React.ReactNode;
}

export default function ContextCompose({
  contexts = [],
  children,
}: ContextComposeProps) {
  return (
    <>
      {contexts.reduceRight((acc, Context) => {
        return <Context>{acc}</Context>;
      }, children)}
    </>
  );
}
