import { useEffect } from 'react';
import PropTypes from 'prop-types';
import NextHead from 'next/head';
//@ts-ignore
import { register, unregister } from 'next-offline/runtime';

type Props = {
  title: string
}

const Head: React.FC<Props> = (props: Props) => {
  useEffect(() => {
    register('/service-worker.js', { scope: '/' })

    return () => {
      unregister();
    };
  }, [])

  return (
    <NextHead>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width,initial-scale=1' />
      <meta name='description' content='Description' />
      <meta name='keywords' content='Keywords' />
      <title>FindMovies</title>

      <link rel="manifest" href="/manifest.json" />
      <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
      <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
      <link rel="apple-touch-icon" href="/apple-icon.png"></link>
      <meta name="theme-color" content="#317EFB" />

      <title>
        {props.title}
      </title>
      <link rel="icon" href="/favicon.png" />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Underdog&display=swap" rel="stylesheet"></link>
    </NextHead>
  )
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Head;