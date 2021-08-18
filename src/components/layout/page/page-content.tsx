import Container from 'components/ui/container';
import { Fragment } from 'react';

const PageContent: React.FC = ({ children }) => {
  return (
    <Fragment>
      <section className='flex flex-col flex-1 py-16'>
        <Container>{children}</Container>
      </section>
    </Fragment>
  );
};

export default PageContent;
