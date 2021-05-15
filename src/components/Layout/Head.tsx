import PropTypes from 'prop-types';
import NextHead from 'next/head';

type Props = {
  title: string
}

const Head: React.FC<Props> = (props: Props) => {
  return (
    <NextHead>
      <title>
        {props.title}
      </title>
      <link rel="icon" href="/favicon.png" />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap" rel="stylesheet" />
    </NextHead>
  )
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Head;