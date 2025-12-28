# Data-Flow Diagram (DFD) for CipherSQLStudio

This document provides a reference for drawing the Data-Flow Diagram by hand.

## Level 0 DFD (Context Diagram)

```
                    ┌─────────────────────────────────┐
                    │                                 │
                    │      Student/Learner            │
                    │                                 │
                    └────────────┬────────────────────┘
                                 │
                                 │ Assignment Description
                                 │ Table Schema
                                 │ Sample Data
                                 │ SQL Query Attempt
                                 │
                    ┌────────────▼────────────────────┐
                    │                                 │
                    │    CipherSQLStudio              │
                    │    SQL Tutor System             │
                    │                                 │
                    │  ┌──────────────────────────┐   │
                    │  │   SQL Tutor Engine       │   │
                    │  │   (Hint Generator)       │   │
                    │  └──────────────────────────┘   │
                    │                                 │
                    └────────────┬────────────────────┘
                                 │
                                 │ Educational Hints
                                 │ Conceptual Guidance
                                 │
                    ┌────────────▼────────────────────┘
                    │                                 │
                    │      Student/Learner            │
                    │                                 │
                    └─────────────────────────────────┘
```

### Components:
- **External Entity**: Student/Learner (appears twice - input and output)
- **Process**: CipherSQLStudio SQL Tutor System
- **Data Flows**:
  - Assignment Description (input)
  - Table Schema (input)
  - Sample Data (input)
  - SQL Query Attempt (input)
  - Educational Hints (output)
  - Conceptual Guidance (output)

---

## Level 1 DFD (Detailed Process Breakdown)

```
┌─────────────────────────────────────────────────────────────────────┐
│                         STUDENT/LEARNER                             │
└─────────────────────────────────────────────────────────────────────┘
         │                    │                    │
         │                    │                    │
         │ Assignment         │ Table Schema       │ SQL Query
         │ Description        │                    │ Attempt
         │                    │                    │
         ▼                    ▼                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│  1.0 RECEIVE INPUT                                                   │
│  - Assignment Description                                            │
│  - Table Schema                                                      │
│  - Sample Data                                                       │
│  - Student SQL Query                                                 │
└────────────────────────┬────────────────────────────────────────────┘
                         │
                         │ Validated Input Data
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────────┐
│  2.0 ANALYZE SQL ATTEMPT                                             │
│  - Check for SQL keywords (SELECT, FROM, WHERE, etc.)                │
│  - Determine attempt quality level                                   │
│  - Identify missing concepts                                         │
│  - Detect logical issues                                             │
└────────────────────────┬────────────────────────────────────────────┘
                         │
                         │ Analysis Results
                         │ (Quality Level, Issues)
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────────┐
│  3.0 SELECT HINT STRATEGY                                            │
│  - Empty Query → Starting Hints                                      │
│  - Beginning → Conceptual Hints                                      │
│  - Partial → Improvement Hints                                       │
│  - Advanced → Refinement Hints                                       │
└────────────────────────┬────────────────────────────────────────────┘
                         │
                         │ Selected Hint Type
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────────┐
│  4.0 GENERATE EDUCATIONAL HINT                                      │
│  - Apply hint rules (no SQL code, no solutions)                     │
│  - Generate 1-2 hints (max 5 sentences)                              │
│  - Ensure conceptual guidance only                                   │
│  - Apply friendly, encouraging tone                                  │
└────────────────────────┬────────────────────────────────────────────┘
                         │
                         │ Educational Hint
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         STUDENT/LEARNER                              │
│                    (Receives Guidance)                               │
└─────────────────────────────────────────────────────────────────────┘
```

### Data Stores (if needed):

```
┌─────────────────────┐
│   D1: Hint Library   │
│   - Starting Hints    │
│   - Conceptual Hints │
│   - Improvement Hints│
│   - Refinement Hints │
└─────────────────────┘
         ▲
         │
         │ Hint Templates
         │
         │
┌────────┴────────────────────────────┐
│  4.0 GENERATE EDUCATIONAL HINT      │
└─────────────────────────────────────┘
```

---

## Drawing Instructions

### Materials Needed:
- Paper (preferably graph paper)
- Pencil and eraser
- Ruler (for straight lines)
- Colored pens/pencils (optional, for clarity)

### Symbols to Use:

1. **Process (Circle or Rounded Rectangle)**
   - Represents a process/function
   - Label with process number and name
   - Example: `1.0 RECEIVE INPUT`

2. **External Entity (Rectangle)**
   - Represents external source/destination
   - Example: `STUDENT/LEARNER`

3. **Data Flow (Arrow)**
   - Shows direction of data movement
   - Label with data name
   - Example: `Assignment Description →`

4. **Data Store (Open Rectangle or Two Parallel Lines)**
   - Represents data storage
   - Label with "D" and number
   - Example: `D1: Hint Library`

### Steps to Draw:

1. **Start with Level 0 (Context Diagram)**
   - Draw one large process circle in the center: "CipherSQLStudio SQL Tutor System"
   - Draw external entity rectangles: "Student/Learner" (on left and right)
   - Draw arrows showing data flows:
     - Left side: Inputs (Assignment, Schema, Data, Query)
     - Right side: Outputs (Hints, Guidance)

2. **Draw Level 1 (Detailed Process)**
   - Break down the main process into 4 sub-processes:
     - 1.0 RECEIVE INPUT
     - 2.0 ANALYZE SQL ATTEMPT
     - 3.0 SELECT HINT STRATEGY
     - 4.0 GENERATE EDUCATIONAL HINT
   - Show data flows between processes
   - Add external entities (Student/Learner) at top and bottom
   - Optionally add data store (D1: Hint Library) connected to process 4.0

3. **Label Everything Clearly**
   - Use clear, readable labels
   - Number processes sequentially
   - Name all data flows

4. **Review and Refine**
   - Ensure all flows are labeled
   - Check that inputs and outputs balance
   - Verify logical flow from input to output

---

## Data Flow Descriptions

### Input Flows:
- **Assignment Description**: Text describing the SQL problem/question
- **Table Schema**: Structure of database tables (columns, relationships)
- **Sample Data**: Example rows to help understand data structure
- **SQL Query Attempt**: Student's current SQL code attempt

### Output Flows:
- **Educational Hints**: Conceptual guidance without SQL code
- **Conceptual Guidance**: Suggestions on which SQL concepts to consider

### Internal Flows:
- **Validated Input Data**: Processed and validated input information
- **Analysis Results**: Quality level and identified issues
- **Selected Hint Type**: Strategy chosen based on analysis
- **Hint Templates**: Pre-defined hint patterns from library

---

## Level 2 DFD (Optional - Detailed View of Process 2.0)

If you need more detail, you can expand Process 2.0:

```
┌─────────────────────────────────────────────────────────┐
│  2.0 ANALYZE SQL ATTEMPT                                │
└─────────────────────────────────────────────────────────┘
         │
         │ SQL Query
         │
         ▼
┌─────────────────────────────────────────────────────────┐
│  2.1 CHECK SQL KEYWORDS                                 │
│  - Detect SELECT, FROM, WHERE, JOIN, GROUP BY, etc.     │
└────────────────────────┬────────────────────────────────┘
                         │
                         │ Keyword Analysis
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│  2.2 DETERMINE QUALITY LEVEL                            │
│  - Count keywords found                                 │
│  - Classify: Empty/Beginning/Partial/Advanced           │
└────────────────────────┬────────────────────────────────┘
                         │
                         │ Quality Classification
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│  2.3 IDENTIFY MISSING CONCEPTS                          │
│  - Compare with assignment requirements                 │
│  - Check for filtering, aggregation, joins              │
└────────────────────────┬────────────────────────────────┘
                         │
                         │ Missing Concepts List
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│  2.4 DETECT LOGICAL ISSUES                              │
│  - Check for common mistakes                            │
│  - Verify query structure                               │
└────────────────────────┬────────────────────────────────┘
                         │
                         │ Analysis Results
                         │
                         ▼
```

---

## Notes for Hand Drawing

1. **Use consistent symbols** throughout the diagram
2. **Keep processes balanced** - each process should have both inputs and outputs
3. **Number processes** hierarchically (1.0, 1.1, 1.2, etc.)
4. **Label all flows** clearly
5. **Use different colors** (optional) to distinguish:
   - Input flows (blue)
   - Output flows (green)
   - Internal flows (black)
   - Processes (red outline)
6. **Maintain hierarchy**: Level 0 shows the big picture, Level 1 shows details
7. **Ensure readability**: Leave enough space between elements

---

## Example Hand-Drawn Layout

```
                    [Student]
                       │
        ┌──────────────┼──────────────┐
        │              │              │
    [Assignment]  [Schema]      [Query]
        │              │              │
        └──────┬───────┴──────┬───────┘
               │              │
        ┌──────▼──────────────▼──────┐
        │   CipherSQLStudio          │
        │   SQL Tutor System         │
        └──────┬─────────────────────┘
               │
          [Hints]
               │
        ┌──────▼──────┐
        │  Student   │
        └────────────┘
```

---

This document serves as a reference for creating your hand-drawn Data-Flow Diagram. Follow the structure and symbols described above to create a clear, professional DFD.

