import { useState, useEffect, MouseEvent, ReactElement } from 'react';
import { Container, SelectedPage } from './styled';

type NavigationProps = {
  numberOfElements: number;
  onPagination: Function;
}

const PAGINATION_OFFSET: number = 5;
const INITIAL_PAGE: number = 1;

const Navigation: React.FC<NavigationProps> = ({ onPagination, numberOfElements }) => {
  const [currentPage, setCurrentPage] = useState<number>(INITIAL_PAGE);

  const nextNavigation = (page: number) => {
    setCurrentPage(page);
  }

  const renderNavigation = () => {
    const _numberOfElements: number = Math.round(numberOfElements / PAGINATION_OFFSET);
    const itens: ReactElement[] = [];

    let page: number = 1;
    while (page <= PAGINATION_OFFSET && page <= _numberOfElements) {
      if (page === currentPage) {
        itens.push(
          <SelectedPage key={page}>
            <button
              name={page.toString()}
              onClick={(event: MouseEvent<HTMLButtonElement>) => nextNavigation(Number.parseInt(event.currentTarget.name))}
            >{page}
            </button>
          </SelectedPage>
        )
      } else {
        itens.push(
          <button
            key={page}
            name={page.toString()}
            className="page-number"
            onClick={(event: MouseEvent<HTMLButtonElement>) => nextNavigation(Number.parseInt(event.currentTarget.name))}
          >
            {page}
          </button>
        )
      }
      page = page + 1;
    }

    return (
      <>
        {itens}
      </>
    )
  }

  useEffect(() => {
    let mounted: boolean = true;

    if (!mounted) return;

    onPagination(currentPage - 1, PAGINATION_OFFSET);

    return () => {
      mounted = false;
    }
  }, [currentPage]);

  return (
    <Container>
      {renderNavigation()}
    </Container>
  )
};

export default Navigation;