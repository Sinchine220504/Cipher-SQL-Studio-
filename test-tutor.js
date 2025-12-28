/**
 * Test file demonstrating the SQL Tutor with different scenarios
 * Run with: node test-tutor.js
 */

const SQLTutor = require('./sql-tutor.js');

const tutor = new SQLTutor();

// Test scenarios
const scenarios = [
  {
    name: "Empty Query",
    context: {
      assignment_description: "Find all customers who have placed more than 5 orders",
      table_schema: "customers (id, name, email)\norders (id, customer_id, order_date, total)",
      sample_rows: "Sample data...",
      user_sql_query: ""
    }
  },
  {
    name: "Beginning Attempt",
    context: {
      assignment_description: "Find all customers who have placed more than 5 orders",
      table_schema: "customers (id, name, email)\norders (id, customer_id, order_date, total)",
      sample_rows: "Sample data...",
      user_sql_query: "SELECT * FROM customers"
    }
  },
  {
    name: "Partial Attempt",
    context: {
      assignment_description: "Find all customers who have placed more than 5 orders",
      table_schema: "customers (id, name, email)\norders (id, customer_id, order_date, total)",
      sample_rows: "Sample data...",
      user_sql_query: "SELECT name FROM customers JOIN orders ON customers.id = orders.customer_id"
    }
  },
  {
    name: "Advanced Attempt",
    context: {
      assignment_description: "Find all customers who have placed more than 5 orders",
      table_schema: "customers (id, name, email)\norders (id, customer_id, order_date, total)",
      sample_rows: "Sample data...",
      user_sql_query: "SELECT name, COUNT(*) FROM customers JOIN orders ON customers.id = orders.customer_id GROUP BY name HAVING COUNT(*) > 5"
    }
  }
];

console.log("=".repeat(60));
console.log("CipherSQLStudio SQL Tutor - Test Scenarios");
console.log("=".repeat(60));
console.log();

scenarios.forEach((scenario, index) => {
  console.log(`\nScenario ${index + 1}: ${scenario.name}`);
  console.log("-".repeat(60));
  console.log(`Assignment: ${scenario.context.assignment_description}`);
  console.log(`Student Query: ${scenario.context.user_sql_query || "(empty)"}`);
  console.log();
  console.log("Hint:");
  const hint = tutor.provideHint(scenario.context);
  console.log(`  "${hint}"`);
  console.log();
});

console.log("=".repeat(60));
console.log("Test Complete");
console.log("=".repeat(60));

