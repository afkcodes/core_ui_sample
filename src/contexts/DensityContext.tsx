// src/context/density-context.tsx
import React from 'react';

// Match the density variant from the recipe
export type Density = 'default' | 'compact';

interface DensityContextType {
  density: Density;
  setDensity: (density: Density) => void;
}

const DensityContext = React.createContext<DensityContextType | undefined>(undefined);

export function DensityProvider({
  children,
  defaultDensity = 'default',
}: {
  children: React.ReactNode;
  defaultDensity?: Density;
}) {
  const [density, setDensity] = React.useState<Density>(defaultDensity);

  const value = React.useMemo(
    () => ({
      density,
      setDensity,
    }),
    [density]
  );

  return <DensityContext.Provider value={value}>{children}</DensityContext.Provider>;
}

export function useDensity() {
  const context = React.useContext(DensityContext);
  if (context === undefined) {
    throw new Error('useDensity must be used within a DensityProvider');
  }
  return context;
}
