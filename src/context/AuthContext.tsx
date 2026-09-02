import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

interface AuthUser {
  id: string;
  email: string;
  role: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: AuthUser | null;
  login: (email: string, pass: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check local session or Supabase session
    async function initAuth() {
      if (isSupabaseConfigured && supabase) {
        try {
          const { data: { session } } = await supabase.auth.getSession();
          if (session?.user) {
            setUser({
              id: session.user.id,
              email: session.user.email || '',
              role: 'admin'
            });
          }
          const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            if (session?.user) {
              setUser({
                id: session.user.id,
                email: session.user.email || '',
                role: 'admin'
              });
            } else {
              setUser(null);
            }
          });
          setIsLoading(false);
          return () => subscription.unsubscribe();
        } catch (e) {
          console.warn('Supabase auth init failed:', e);
        }
      }

      // Local mock check
      const localAdmin = localStorage.getItem('rkp_admin_logged_in');
      if (localAdmin === 'true') {
        setUser({
          id: 'admin-local',
          email: 'admin@rupeshpandey.dev',
          role: 'admin'
        });
      }
      setIsLoading(false);
    }

    initAuth();
  }, []);

  const login = async (email: string, pass: string): Promise<{ success: boolean; error?: string }> => {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password: pass,
        });
        if (error) {
          return { success: false, error: error.message };
        }
        if (data.user) {
          setUser({
            id: data.user.id,
            email: data.user.email || email,
            role: 'admin'
          });
          return { success: true };
        }
      } catch (err: any) {
        return { success: false, error: err.message || 'Authentication failed.' };
      }
    }

    // Local development fallback authentication
    // Accepts any standard password like 'admin123' or 'password' during dev
    if (email && pass.length >= 6) {
      localStorage.setItem('rkp_admin_logged_in', 'true');
      setUser({
        id: 'admin-local',
        email: email,
        role: 'admin'
      });
      return { success: true };
    }

    return { success: false, error: 'Invalid email or password (min 6 characters).' };
  };

  const logout = async () => {
    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.auth.signOut();
      } catch (e) {
        console.warn(e);
      }
    }
    localStorage.removeItem('rkp_admin_logged_in');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, isLoading, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
