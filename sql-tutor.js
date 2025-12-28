/**
 * CipherSQLStudio - Intelligent SQL Tutor
 * Provides hints and guidance without giving complete solutions
 */

class SQLTutor {
  constructor() {
    this.hintCount = 0;
    this.maxHintsPerResponse = 2;
  }

  /**
   * Main method to generate hints based on student's SQL attempt
   * @param {Object} context - Contains assignment, schema, sample data, and student query
   * @returns {string} - A helpful hint (no SQL code)
   */
  provideHint(context) {
    const { assignment_description, table_schema, sample_rows, user_sql_query } = context;
    
    // Reset hint count for new response
    this.hintCount = 0;
    
    // Analyze the student's attempt
    const analysis = this.analyzeAttempt(user_sql_query, assignment_description);
    
    // Generate appropriate hint based on attempt quality
    return this.generateHint(analysis, context);
  }

  /**
   * Analyzes the student's SQL attempt to determine its quality
   * @param {string} query - Student's SQL query
   * @param {string} assignment - Assignment description
   * @returns {Object} - Analysis result with quality level and issues
   */
  analyzeAttempt(query, assignment) {
    const trimmedQuery = (query || '').trim();
    
    // Empty or very minimal attempt
    if (!trimmedQuery || trimmedQuery.length < 10) {
      return { quality: 'empty', issues: [] };
    }
    
    // Check for common SQL keywords to assess progress
    const hasSelect = /SELECT/i.test(trimmedQuery);
    const hasFrom = /FROM/i.test(trimmedQuery);
    const hasWhere = /WHERE/i.test(trimmedQuery);
    const hasGroupBy = /GROUP\s+BY/i.test(trimmedQuery);
    const hasJoin = /JOIN/i.test(trimmedQuery);
    const hasOrderBy = /ORDER\s+BY/i.test(trimmedQuery);
    
    const keywordCount = [hasSelect, hasFrom, hasWhere, hasGroupBy, hasJoin, hasOrderBy]
      .filter(Boolean).length;
    
    // Determine quality level
    if (keywordCount <= 1) {
      return { quality: 'beginning', issues: [] };
    } else if (keywordCount <= 3) {
      return { quality: 'partial', issues: [] };
    } else {
      return { quality: 'advanced', issues: [] };
    }
  }

  /**
   * Generates an appropriate hint based on analysis
   * @param {Object} analysis - Analysis result
   * @param {Object} context - Full context with assignment, schema, etc.
   * @returns {string} - Educational hint
   */
  generateHint(analysis, context) {
    const { quality } = analysis;
    const { assignment_description, table_schema, user_sql_query } = context;
    
    let hints = [];
    
    switch (quality) {
      case 'empty':
        hints.push(this.getStartingHint(context));
        break;
      
      case 'beginning':
        hints.push(this.getConceptualHint(context));
        break;
      
      case 'partial':
        hints.push(this.getImprovementHint(context));
        break;
      
      case 'advanced':
        hints.push(this.getRefinementHint(context));
        break;
    }
    
    // Return 1-2 hints, keeping response under 5 sentences
    return hints.slice(0, this.maxHintsPerResponse).join(' ');
  }

  /**
   * Provides high-level conceptual hint for empty attempts
   */
  getStartingHint(context) {
    const hints = [
      "Think about what data you need to retrieve and which table contains that information.",
      "Consider what the question is asking you to find - is it filtering, counting, or combining data?",
      "Start by identifying which table has the information you need, then think about how to extract the specific data requested.",
      "Remember that SQL queries typically begin by selecting what you want to see, then specifying where that data comes from."
    ];
    return this.selectRandomHint(hints);
  }

  /**
   * Provides conceptual guidance for beginning attempts
   */
  getConceptualHint(context) {
    const { user_sql_query, assignment_description } = context;
    
    // Check what's missing
    const hasWhere = /WHERE/i.test(user_sql_query);
    const hasGroupBy = /GROUP\s+BY/i.test(user_sql_query);
    const hasJoin = /JOIN/i.test(user_sql_query);
    
    if (!hasWhere && this.mentionsFiltering(assignment_description)) {
      return "Consider whether you need to filter the data based on specific conditions mentioned in the question.";
    }
    
    if (!hasGroupBy && this.mentionsAggregation(assignment_description)) {
      return "Think about whether you need to group data together or perform calculations across multiple rows.";
    }
    
    if (!hasJoin && this.mentionsMultipleTables(assignment_description, context.table_schema)) {
      return "The question might require combining information from multiple tables - consider how they relate to each other.";
    }
    
    return "Review the question requirements carefully - are there any conditions or calculations you haven't addressed yet?";
  }

  /**
   * Provides improvement hints for partial attempts
   */
  getImprovementHint(context) {
    const { user_sql_query, assignment_description } = context;
    
    const hints = [
      "Double-check that your filtering conditions match all the requirements mentioned in the question.",
      "Consider whether you need to handle any edge cases, such as null values or empty results.",
      "Think about the order of operations in your query - are you filtering before or after grouping?",
      "Verify that you're selecting all the columns or calculations that the question asks for."
    ];
    
    return this.selectRandomHint(hints);
  }

  /**
   * Provides refinement hints for advanced attempts
   */
  getRefinementHint(context) {
    const hints = [
      "Consider whether there are any edge cases in the data that your current approach might miss.",
      "Think about whether your query could be simplified or if there's a more efficient way to express the same logic.",
      "Review the sample data to ensure your query handles all possible scenarios correctly."
    ];
    
    return this.selectRandomHint(hints);
  }

  /**
   * Helper: Check if assignment mentions filtering
   */
  mentionsFiltering(description) {
    const filterKeywords = ['where', 'filter', 'only', 'except', 'excluding', 'greater', 'less', 'equal'];
    return filterKeywords.some(keyword => 
      description.toLowerCase().includes(keyword)
    );
  }

  /**
   * Helper: Check if assignment mentions aggregation
   */
  mentionsAggregation(description) {
    const aggKeywords = ['count', 'sum', 'average', 'total', 'group', 'each', 'per', 'maximum', 'minimum'];
    return aggKeywords.some(keyword => 
      description.toLowerCase().includes(keyword)
    );
  }

  /**
   * Helper: Check if assignment mentions multiple tables
   */
  mentionsMultipleTables(description, schema) {
    if (!schema) return false;
    const tableNames = schema.match(/\b\w+\.\w+\b/g) || [];
    return tableNames.length > 1 || description.toLowerCase().includes('join') || 
           description.toLowerCase().includes('combine') || 
           description.toLowerCase().includes('relate');
  }

  /**
   * Selects a random hint from array
   */
  selectRandomHint(hints) {
    return hints[Math.floor(Math.random() * hints.length)];
  }
}

// Export for use in browser or Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SQLTutor;
}

// For browser usage
if (typeof window !== 'undefined') {
  window.SQLTutor = SQLTutor;
}

