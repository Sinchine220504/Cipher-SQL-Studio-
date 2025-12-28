# CipherSQLStudio - Intelligent SQL Tutor

An intelligent SQL tutoring system that provides hints and conceptual guidance to help students learn SQL without giving away complete solutions.

## Features

- **Adaptive Hint System**: Provides different levels of hints based on student progress
- **No Direct Solutions**: Never provides complete SQL queries or copy-pasteable code
- **Conceptual Guidance**: Focuses on teaching SQL concepts and problem-solving approaches
- **Educational Focus**: Encourages learning through guided discovery

## Usage

### Basic Example

```javascript
const tutor = new SQLTutor();

const context = {
  assignment_description: "Find all customers who have placed more than 5 orders",
  table_schema: "customers (id, name, email)\norders (id, customer_id, order_date, total)",
  sample_rows: "Sample data for understanding...",
  user_sql_query: "SELECT * FROM customers"
};

const hint = tutor.provideHint(context);
console.log(hint);
// Output: "Think about whether you need to group data together or perform calculations across multiple rows."
```

### Integration in Browser

```html
<script src="sql-tutor.js"></script>
<script>
  const tutor = new SQLTutor();
  const hint = tutor.provideHint({
    assignment_description: "Your assignment here",
    table_schema: "Your schema here",
    sample_rows: "Sample data",
    user_sql_query: "Student's current attempt"
  });
</script>
```

### Integration in Node.js

```javascript
const SQLTutor = require('./sql-tutor.js');
const tutor = new SQLTutor();
// Use as above
```

## How It Works

The tutor analyzes the student's SQL attempt and provides hints based on:

1. **Empty Query**: Provides high-level conceptual guidance on how to start
2. **Beginning Attempt**: Suggests relevant SQL concepts to consider
3. **Partial Attempt**: Points out improvements or missing concepts
4. **Advanced Attempt**: Highlights edge cases or optimization opportunities

## Rules

The tutor follows strict guidelines:

- ✅ Explains SQL concepts
- ✅ Identifies logical mistakes
- ✅ Suggests which concepts to think about
- ✅ Asks guiding questions
- ❌ Never provides complete SQL solutions
- ❌ Never gives copy-pasteable code
- ❌ Never reveals exact query structure

## License

MIT

