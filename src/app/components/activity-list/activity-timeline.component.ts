import { Component } from '@angular/core';

interface TimelineEntry {
  id: number;
  type: 'meeting' | 'call' | 'coffee' | 'note';
  timeAgo: string;
  description: string;
  createdBy: string; // New field for the username
  icon?: string

}

@Component({
  selector: 'app-activity-timeline',
  templateUrl: './activity-timeline.component.html',
  styleUrls: ['./activity-timeline.component.scss']
})

export class ActivityTimelineComponent {
  
   activeDropdown: number | null = null;

  toggleDropdown(index: number) {
   
    this.activeDropdown = this.activeDropdown === index ? null : index;
  }
  
  note: string = '';
  selectedType: TimelineEntry['type'] = 'note';
  currentUser: string = 'John Doe'; 
  icon: string = ''
  entries: TimelineEntry[] = [
    {
      id: 1,
      type: 'meeting',
      timeAgo: '3d',
      description: 'And a more formal meeting.',
      createdBy: 'Jane Smith',
      icon:'user-round'
    },
    {
      id: 2,
      type: 'call',
      timeAgo: '5d',
      description: 'Then we had a follow-up phone call.',
      createdBy: 'John Doe',
      icon:'phone'
    },
    {
      id: 3,
      type: 'coffee',
      timeAgo: '6d',
      description: 'We had coffee!',
      createdBy: 'Jane Smith',
      icon:'coffee'
    },
    {
      id: 4,
      type: 'note',
      timeAgo: '14d',
      description: 'A test note of message type!',
      createdBy: 'John Doe',
      icon:'message-circle'
    },
  ];
  

  getIcon(type: TimelineEntry['type']): string {
    switch (type) {
      case 'meeting':
        return 'user-round';
      case 'call':
        return 'phone';
      case 'coffee':
        return 'coffee';
      case 'note':
        return 'message-circle';
      
      
    }
  }

  selectType(type: TimelineEntry['type']) {
    this.selectedType = type;
  }

  sanitizeInput(input: string): string {
    // Allow only letters, numbers, spaces, and basic punctuation
    return input.replace(/[^a-zA-Z0-9\s.,!?]/g, '');
  }

  allowOnlyText(event: KeyboardEvent): void {
    const allowedKeys = /^[a-zA-Z\s]*$/; // Allow only letters and spaces
    const key = event.key;
    if (!allowedKeys.test(key) && key !== 'Backspace') {
      event.preventDefault(); // Block invalid characters
    }
  }

  deleteEntry(index: number): void {
    this.entries.splice(index, 1); 
    this.activeDropdown = null; 
  }
  

  onSubmit() {
    const sanitizedNote = this.sanitizeInput(this.note.trim());
    if (sanitizedNote) {
      const newEntry: TimelineEntry = {
        id: this.entries.length + 1,
        type: this.selectedType,
        timeAgo: 'Just now',
        description: sanitizedNote,
        createdBy: this.currentUser, // Assign the current user
        icon: this.getIcon(this.selectedType)
      };
      this.entries.unshift(newEntry);
      this.note = '';
      this.selectedType = 'note';
    }
  }
  
}
