import React, { createContext, useContext, useRef, ReactNode } from 'react';

type EventListener = (data: any) => void;

interface EventContextType {
  emit: (event: string, data: any) => void;
  on: (event: string, listener: EventListener) => void;
  off: (event: string, listener: EventListener) => void;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export const EventProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const listenersRef = useRef<Map<string, Set<EventListener>>>(new Map());

  const emit = (event: string, data: any) => {
    const listeners = listenersRef.current.get(event);
    if (listeners) {
      listeners.forEach(listener => listener(data));
    }
  };

  const on = (event: string, listener: EventListener) => {
    if (!listenersRef.current.has(event)) {
      listenersRef.current.set(event, new Set());
    }
    listenersRef.current.get(event)!.add(listener);
  };

  const off = (event: string, listener: EventListener) => {
    const listeners = listenersRef.current.get(event);
    if (listeners) {
      listeners.delete(listener);
      if (listeners.size === 0) {
        listenersRef.current.delete(event);
      }
    }
  };

  return (
    <EventContext.Provider value={{ emit, on, off }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvent = (): EventContextType => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEvent must be used within an EventProvider');
  }
  return context;
};
