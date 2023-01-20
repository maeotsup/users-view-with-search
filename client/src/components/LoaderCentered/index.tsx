import { Loader } from 'semantic-ui-react';

interface ILoaderProps {
  children?: React.ReactNode;
}

const LoaderCentered = ({ children }: ILoaderProps) => (
  <Loader active size='medium' inline='centered'>{ children }</Loader>
);

export default LoaderCentered;
