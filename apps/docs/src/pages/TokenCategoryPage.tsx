import { useParams, Navigate } from 'react-router-dom';
import { ColourPage } from './tokens/ColourPage';
import { SpacingPage } from './tokens/SpacingPage';
import { TypographyPage } from './tokens/TypographyPage';
import { RadiiPage } from './tokens/RadiiPage';
import { ShadowPage } from './tokens/ShadowPage';
import { MotionPage } from './tokens/MotionPage';
import { ZIndexPage } from './tokens/ZIndexPage';

const categoryMap: Record<string, () => JSX.Element> = {
  colour: ColourPage,
  spacing: SpacingPage,
  typography: TypographyPage,
  radii: RadiiPage,
  shadow: ShadowPage,
  motion: MotionPage,
  'z-index': ZIndexPage,
};

export function TokenCategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const Component = slug ? categoryMap[slug] : undefined;
  if (!Component) {
    return <Navigate to="/tokens" replace />;
  }
  return <Component />;
}
