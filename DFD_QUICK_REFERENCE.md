# DFD Quick Reference Sheet for Hand Drawing

## Symbol Legend

```
┌─────────┐
│ Entity  │  = External Entity (Rectangle)
└─────────┘

  ╭─────╮
  │ 1.0 │  = Process (Circle or Rounded Rectangle)
  ╰─────╯

  ────→  = Data Flow (Arrow with label)

┌─────────┐
│ D1:    │  = Data Store (Open Rectangle)
│ Store  │
└─────────┘
```

---

## Level 0 DFD - Context Diagram

**Center Process:**
- `CipherSQLStudio SQL Tutor System`

**External Entities:**
- `Student/Learner` (left side - input)
- `Student/Learner` (right side - output)

**Input Flows (left side):**
- Assignment Description →
- Table Schema →
- Sample Data →
- SQL Query Attempt →

**Output Flows (right side):**
- Educational Hints →
- Conceptual Guidance →

---

## Level 1 DFD - Main Processes

**Processes (top to bottom):**

1. `1.0 RECEIVE INPUT`
   - Inputs: Assignment, Schema, Data, Query
   - Output: Validated Input Data

2. `2.0 ANALYZE SQL ATTEMPT`
   - Input: Validated Input Data
   - Output: Analysis Results

3. `3.0 SELECT HINT STRATEGY`
   - Input: Analysis Results
   - Output: Selected Hint Type

4. `4.0 GENERATE EDUCATIONAL HINT`
   - Input: Selected Hint Type
   - Output: Educational Hint

**External Entities:**
- `Student/Learner` (top - provides input)
- `Student/Learner` (bottom - receives output)

**Optional Data Store:**
- `D1: Hint Library` (connected to Process 4.0)

---

## Drawing Checklist

- [ ] Draw Level 0 context diagram first
- [ ] Draw Level 1 detailed processes
- [ ] Label all processes with numbers and names
- [ ] Label all data flows with descriptive names
- [ ] Show external entities clearly
- [ ] Use consistent symbols throughout
- [ ] Ensure all flows are connected properly
- [ ] Add title and legend to your diagram

---

## Key Points to Remember

1. **One process per function** - Each numbered process does one thing
2. **All flows must be labeled** - Every arrow needs a name
3. **Balance inputs/outputs** - Processes should have both
4. **Hierarchical numbering** - 1.0, 2.0, 3.0 for Level 1; 1.1, 1.2 for Level 2
5. **External entities** appear at system boundaries
6. **Data stores** hold data between processes

---

## Simple Layout Template

```
        [Student]
           │
    ┌──────┼──────┐
    │      │      │
    ▼      ▼      ▼
  ╭───────────────╮
  │  1.0 Process  │
  ╰───────┬───────╯
          │
          ▼
  ╭───────────────╮
  │  2.0 Process  │
  ╰───────┬───────╯
          │
          ▼
        [Student]
```

Use this as a guide when drawing your DFD by hand!

