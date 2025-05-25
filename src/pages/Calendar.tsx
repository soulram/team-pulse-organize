import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus, Users } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format, addDays, startOfWeek, startOfDay, addWeeks, addMonths, subMonths, subWeeks } from "date-fns";
import { AddEventFormButton } from "@/components/FormButtons";

// Mock calendar events
const mockEvents = [
  {
    id: 1,
    title: 'Team Planning Meeting',
    project: 'Website Redesign',
    start: new Date(2025, 4, 22, 10, 0), // May 22, 2025 10:00 AM
    end: new Date(2025, 4, 22, 11, 30),  // May 22, 2025 11:30 AM
    type: 'meeting',
    attendees: ['John Doe', 'Alice Smith', 'Bob Johnson']
  },
  {
    id: 2,
    title: 'Client Presentation',
    project: 'Product Launch',
    start: new Date(2025, 4, 22, 14, 0), // May 22, 2025 2:00 PM
    end: new Date(2025, 4, 22, 15, 0),   // May 22, 2025 3:00 PM
    type: 'meeting',
    attendees: ['John Doe', 'Carol Davis', 'Eve Brown', 'Client Team']
  },
  {
    id: 3,
    title: 'Design Review',
    project: 'Website Redesign',
    start: new Date(2025, 4, 23, 9, 0),  // May 23, 2025 9:00 AM
    end: new Date(2025, 4, 23, 10, 30),  // May 23, 2025 10:30 AM
    type: 'meeting',
    attendees: ['Alice Smith', 'David Wilson', 'Bob Johnson']
  },
  {
    id: 4,
    title: 'Homepage Wireframes Deadline',
    project: 'Website Redesign',
    start: new Date(2025, 4, 24),       // May 24, 2025 (all day)
    end: new Date(2025, 4, 24),
    type: 'deadline',
    attendees: []
  },
  {
    id: 5,
    title: 'API Integration',
    project: 'Mobile App Development',
    start: new Date(2025, 4, 22, 9, 0),  // May 22, 2025 9:00 AM
    end: new Date(2025, 4, 24, 17, 0),   // May 24, 2025 5:00 PM
    type: 'task',
    attendees: ['Frank Miller']
  },
  {
    id: 6,
    title: 'Weekly Project Review',
    project: 'All Projects',
    start: new Date(2025, 4, 25, 15, 0), // May 25, 2025 3:00 PM
    end: new Date(2025, 4, 25, 16, 0),   // May 25, 2025 4:00 PM
    type: 'meeting',
    attendees: ['All Team']
  },
  {
    id: 7,
    title: 'Marketing Strategy Workshop',
    project: 'Marketing Campaign',
    start: new Date(2025, 4, 26, 10, 0), // May 26, 2025 10:00 AM
    end: new Date(2025, 4, 26, 15, 0),   // May 26, 2025 3:00 PM
    type: 'workshop',
    attendees: ['Carol Davis', 'Eve Brown', 'Henry Clark', 'Grace Lee']
  }
];

// Calendar component
const CalendarPage: React.FC = () => {
  const [view, setView] = useState<'month' | 'week' | 'day'>('week');
  const [date, setDate] = useState<Date>(new Date(2025, 4, 22)); // Fixed date: May 22, 2025
  const [selected, setSelected] = useState<Date | undefined>(new Date(2025, 4, 22));
  
  const getEventTypeStyles = (type: string): any => {
    switch (type) {
      case 'meeting':
        return { bg: 'bg-blue-500', text: 'text-white' };
      case 'deadline':
        return { bg: 'bg-red-500', text: 'text-white' };
      case 'task':
        return { bg: 'bg-amber-500', text: 'text-white' };
      case 'workshop':
        return { bg: 'bg-purple-500', text: 'text-white' };
      default:
        return { bg: 'bg-gray-500', text: 'text-white' };
    }
  };

  const handleDateChange = (action: 'prev' | 'next' | 'today') => {
    if (action === 'today') {
      setDate(new Date(2025, 4, 22)); // Reset to May 22, 2025
      return;
    }
    
    if (view === 'month') {
      setDate(action === 'prev' ? subMonths(date, 1) : addMonths(date, 1));
    } else if (view === 'week') {
      setDate(action === 'prev' ? subWeeks(date, 1) : addWeeks(date, 1));
    } else {
      setDate(action === 'prev' ? addDays(date, -1) : addDays(date, 1));
    }
  };

  const renderMonthView = () => {
    return (
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="p-4">
          <CalendarComponent
            mode="single"
            selected={selected}
            onSelect={setSelected}
            className="mx-auto pointer-events-auto"
          />
        </div>
        
        <div className="border-t p-4">
          <h3 className="font-medium mb-3">Events on {selected ? format(selected, 'MMMM d, yyyy') : 'selected date'}</h3>
          <div className="space-y-2">
            {selected && mockEvents
              .filter(event => 
                format(event.start, 'yyyy-MM-dd') === format(selected, 'yyyy-MM-dd')
              )
              .map(event => {
                const styles = getEventTypeStyles(event.type);
                return (
                  <div key={event.id} className="flex items-center p-2 rounded-md border hover:bg-gray-50">
                    <div className={`w-1 self-stretch rounded-full mr-3 ${styles.bg}`}></div>
                    <div className="flex-1">
                      <p className="font-medium">{event.title}</p>
                      <div className="flex items-center text-xs text-muted-foreground gap-2">
                        <span>{format(event.start, 'h:mm a')}</span>
                        <Badge variant="secondary" className="text-xs">{event.project}</Badge>
                      </div>
                    </div>
                  </div>
                );
              })}
            {selected && mockEvents.filter(event => 
              format(event.start, 'yyyy-MM-dd') === format(selected, 'yyyy-MM-dd')
            ).length === 0 && (
              <p className="text-muted-foreground text-sm">No events scheduled for this day.</p>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderWeekView = () => {
    // Get the start of the week for the current date
    const weekStart = startOfWeek(date);
    // Create an array of 7 days starting from weekStart
    const days = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));
    
    // Get the hours for the day
    const hours = Array.from({ length: 12 }, (_, i) => i + 8); // 8 AM to 7 PM
    
    // Function to check if an event should be displayed in this hour cell
    const getEventsForHourAndDay = (day: Date, hour: number) => {
      const dayStart = startOfDay(day);
      const hourStart = new Date(dayStart);
      hourStart.setHours(hour);
      hourStart.setMinutes(0);
      hourStart.setSeconds(0);
      
      const hourEnd = new Date(hourStart);
      hourEnd.setHours(hour + 1);
      
      return mockEvents.filter(event => {
        const eventStart = event.start;
        const eventEnd = event.end;
        
        // Check if event starts before the end of this hour and ends after the start of this hour
        return format(eventStart, 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd') && 
               eventStart < hourEnd && 
               eventEnd > hourStart;
      });
    };
    
    return (
      <div className="bg-white rounded-lg overflow-auto">
        <div className="grid grid-cols-8 border-b min-w-[800px]">
          <div className="p-3 border-r"></div>
          {days.map((day, i) => (
            <div
              key={i}
              className={`p-3 text-center border-r ${
                format(date, 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd') ? 'bg-blue-50' : ''
              }`}
            >
              <p className="font-medium">{format(day, 'EEE')}</p>
              <p className="text-sm text-muted-foreground">{format(day, 'MMM d')}</p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-8 min-h-[600px] min-w-[800px]">
          {hours.map(hour => (
            <div key={hour} className="contents">
              <div className="border-r border-b p-2 text-xs text-muted-foreground">
                {hour === 12 ? '12 PM' : hour > 12 ? `${hour-12} PM` : `${hour} AM`}
              </div>
              
              {days.map((day, dayIndex) => {
                const events = getEventsForHourAndDay(day, hour);
                return (
                  <div 
                    key={`${day}-${hour}`} 
                    className={`border-r border-b relative ${
                      events.length > 0 ? 'bg-blue-50/30' : ''
                    }`}
                  >
                    {events.map(event => {
                      const styles = getEventTypeStyles(event.type);
                      // Calculate event duration in hours (for styling)
                      const durationHours = (event.end.getTime() - event.start.getTime()) / (1000 * 60 * 60);
                      
                      // Only render the event at its starting hour
                      if (event.start.getHours() === hour && format(event.start, 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd')) {
                        return (
                          <div
                            key={event.id}
                            className={`absolute inset-x-1 top-0 rounded-md p-1 calendar-event ${styles.bg} ${styles.text} overflow-hidden text-xs`}
                            style={{ 
                              height: `calc(${Math.min(durationHours, 1) * 100}% - 2px)`,
                              zIndex: 10
                            }}
                          >
                            <div className="font-medium truncate">{event.title}</div>
                            <div className="truncate text-[10px] opacity-90">{event.project}</div>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderDayView = () => {
    // Get the hours for the day
    const hours = Array.from({ length: 14 }, (_, i) => i + 7); // 7 AM to 8 PM
    
    // Function to check if an event should be displayed in this hour
    const getEventsForHour = (hour: number) => {
      const dayStart = startOfDay(date);
      const hourStart = new Date(dayStart);
      hourStart.setHours(hour);
      hourStart.setMinutes(0);
      hourStart.setSeconds(0);
      
      const hourEnd = new Date(hourStart);
      hourEnd.setHours(hour + 1);
      
      return mockEvents.filter(event => {
        const eventStart = event.start;
        const eventEnd = event.end;
        
        // Check if event starts before the end of this hour and ends after the start of this hour
        return format(eventStart, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd') && 
               eventStart < hourEnd && 
               eventEnd > hourStart;
      });
    };
    
    return (
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="p-4 border-b bg-blue-50">
          <h3 className="font-medium text-lg">{format(date, 'EEEE, MMMM d, yyyy')}</h3>
        </div>
        
        <div className="grid grid-cols-12 min-h-[700px]">
          <div className="col-span-2 border-r">
            {hours.map(hour => (
              <div key={hour} className="p-3 border-b text-sm text-muted-foreground h-24">
                {hour === 12 ? '12:00 PM' : hour > 12 ? `${hour-12}:00 PM` : `${hour}:00 AM`}
              </div>
            ))}
          </div>
          
          <div className="col-span-10 relative">
            {hours.map(hour => {
              const events = getEventsForHour(hour);
              return (
                <div key={hour} className="border-b h-24 relative">
                  {events.map(event => {
                    const styles = getEventTypeStyles(event.type);
                    
                    // Calculate event position and height based on actual times
                    const eventStartHour = event.start.getHours();
                    const eventEndHour = event.end.getHours();
                    const eventStartMinutes = event.start.getMinutes();
                    const eventEndMinutes = event.end.getMinutes();
                    
                    // Only render the event at its starting hour
                    if (eventStartHour === hour) {
                      // Calculate duration in minutes
                      const startTimeInMinutes = eventStartHour * 60 + eventStartMinutes;
                      const endTimeInMinutes = eventEndHour * 60 + eventEndMinutes;
                      const durationMinutes = endTimeInMinutes - startTimeInMinutes;
                      
                      // Position from the top of the hour cell (in %)
                      const topOffset = (eventStartMinutes / 60) * 100;
                      // Height based on duration (in %)
                      const heightPercentage = (durationMinutes / 60) * 100;
                      
                      return (
                        <div
                          key={event.id}
                          className={`absolute left-2 right-2 rounded-md p-2 calendar-event ${styles.bg} ${styles.text}`}
                          style={{ 
                            top: `${topOffset}%`,
                            height: `${Math.min(heightPercentage, 100)}%`,
                            zIndex: 10
                          }}
                        >
                          <p className="font-medium">{event.title}</p>
                          <div className="flex items-center justify-between text-xs mt-1">
                            <span>{format(event.start, 'h:mm a')} - {format(event.end, 'h:mm a')}</span>
                            <Badge className="bg-white/20 hover:bg-white/30">{event.project}</Badge>
                          </div>
                          {event.attendees.length > 0 && (
                            <div className="text-xs mt-1 truncate flex items-center gap-1">
                              <Users className="h-3 w-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">
                                {event.attendees.length} attendees
                              </span>
                            </div>
                          )}
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
          <p className="text-muted-foreground">Schedule and manage events, meetings, and deadlines</p>
        </div>
        
        <AddEventFormButton>
          <Plus className="mr-2 h-4 w-4" /> Add Event
        </AddEventFormButton>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" onClick={() => handleDateChange('prev')}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" onClick={() => handleDateChange('today')}>Today</Button>
              <Button variant="outline" size="icon" onClick={() => handleDateChange('next')}>
                <ChevronRight className="h-4 w-4" />
              </Button>
              <h2 className="text-lg font-medium ml-2">
                {view === 'month' && format(date, 'MMMM yyyy')}
                {view === 'week' && `Week of ${format(startOfWeek(date), 'MMM d')} - ${format(addDays(startOfWeek(date), 6), 'MMM d, yyyy')}`}
                {view === 'day' && format(date, 'MMMM d, yyyy')}
              </h2>
            </div>
            
            <Tabs value={view} onValueChange={(v) => setView(v as any)} className="w-auto">
              <TabsList>
                <TabsTrigger value="month">Month</TabsTrigger>
                <TabsTrigger value="week">Week</TabsTrigger>
                <TabsTrigger value="day">Day</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
        <CardContent>
          {view === 'month' && renderMonthView()}
          {view === 'week' && renderWeekView()}
          {view === 'day' && renderDayView()}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockEvents
              .sort((a, b) => a.start.getTime() - b.start.getTime())
              .slice(0, 4)
              .map(event => {
                const styles = getEventTypeStyles(event.type);
                return (
                  <div key={event.id} className="flex items-start gap-3 pb-4 border-b last:border-0">
                    <div className={`${styles.bg} rounded-full p-2 mt-1`}>
                      <CalendarIcon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">{event.title}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>
                          {format(event.start, 'MMM d, h:mm a')} - {format(event.end, 'h:mm a')}
                        </span>
                        <Badge variant="secondary" className="text-xs">{event.project}</Badge>
                      </div>
                      {event.attendees.length > 0 && (
                        <div className="flex items-center gap-1 mt-1">
                          <Users className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">
                            {event.attendees.length} attendees
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="ml-auto">
                      <Button variant="ghost" size="sm">View</Button>
                    </div>
                  </div>
                );
              })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CalendarPage;
