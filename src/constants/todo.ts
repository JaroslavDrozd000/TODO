import { LabelEnum, PriorityEnum } from '../utils/enums/enums';
import { ITodoItem } from '../utils/interfaces/interface';

export const toDo: ITodoItem[] = [
  {
    title: 'Complete project proposal',
    description:
      'Draft the proposal for the upcoming project and share it with the team.',
    priority: PriorityEnum.high,
    label: LabelEnum.job,
  },
  {
    title: 'Buy groceries',
    description:
      'Purchase ingredients for the week, including fruits, vegetables, and snacks.',
    priority: PriorityEnum.high,
    label: LabelEnum.personal,
  },
  {
    title: 'Finish school assignment',
    description:
      'Complete the math assignment and review notes for the upcoming test.',
    priority: PriorityEnum.medium,
    label: LabelEnum.school,
  },
  {
    title: 'Call the dentist',
    description: 'Schedule an appointment for a dental check-up and cleaning.',
    priority: PriorityEnum.low,
    label: LabelEnum.personal,
  },
  {
    title: 'Prepare presentation slides',
    description:
      'Create slides for the upcoming team meeting on project updates.',
    priority: PriorityEnum.low,
    label: LabelEnum.job,
  },
  {
    title: 'Review class notes',
    description:
      'Go over the notes from last week’s lectures to reinforce learning.',
    priority: PriorityEnum.medium,
    label: LabelEnum.school,
  },
  {
    title: 'Organize personal files',
    description:
      'Sort and file personal documents and receipts for better organization.',
    priority: PriorityEnum.low,
    label: LabelEnum.personal,
  },
  {
    title: 'Read a book',
    description:
      'Start reading "The Great Gatsby" for enjoyment and relaxation.',
    priority: PriorityEnum.medium,
    label: LabelEnum.school,
  },
  {
    title: 'Update resume',
    description:
      'Revise and update my resume with recent job experiences and skills.',
    priority: PriorityEnum.high,
    label: LabelEnum.job,
  },
];

export const inProgress: ITodoItem[] = [
  {
    title: 'Write blog post',
    description:
      'Draft the next blog post about productivity tips for remote workers.',
    priority: PriorityEnum.high,
    label: LabelEnum.job,
  },
  {
    title: 'Practice coding exercises',
    description:
      'Work on coding challenges to improve programming skills for upcoming interview.',
    priority: PriorityEnum.medium,
    label: LabelEnum.personal,
  },
  {
    title: 'Study for science exam',
    description:
      'Review key concepts in biology and chemistry for the final exam next week.',
    priority: PriorityEnum.low,
    label: LabelEnum.school,
  },
];

export const done: ITodoItem[] = [
  {
    title: 'Finish reading assignment',
    description:
      'Read chapters 1 through 5 of the assigned textbook for class discussion.',
    priority: PriorityEnum.low,
    label: LabelEnum.personal,
  },
  {
    title: 'Submit homework',
    description:
      'Complete and submit the history homework before the deadline.',
    priority: PriorityEnum.medium,
    label: LabelEnum.school,
  },
  {
    title: 'Prepare quarterly report',
    description:
      'Compile the quarterly report and send it to the manager for review.',
    priority: PriorityEnum.high,
    label: LabelEnum.job,
  },
];
