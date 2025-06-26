class Str {
    /**
     * @function trim
     * @description Trims a string by the right and by the left
     * @param {String} str
     * @return {String} Trimmed string
     * @example
     * trim(' This is a tesT ')
     * // This is a tesT
     * @example
     * str(' This is a tesT ').trim().value
     * // This is a tesT
     */
    static trim(str) {
        return str
            .replace(/^\s+/, '')
            .replace(/\s+$/, '');
    }
    /**
     * @function capitalize
     * @description Capitalizes a string after applying a trim to it
     * @param {String} str
     * @return {String}
     * @example
     * capitalize('test')
     * // Test
     * @example
     * str('TEST').capitalize()
     * // Test
     */
    static capitalize = str => {
        str = this.trim(str);
        return String(str.charAt(0).toUpperCase()) + String(str.slice(1).toLowerCase());
    };
    /**
     * @function camelcase
     * @description Returns a string in camelcase after trimming it
     * @param {String} string
     * @return {String} The camelcase string
     * @example
     * camelcase(' This is a tesT ')
     * // thisIsATest
     * @example
     * str(' This is a tesT ').camelcase().value
     * // thisIsATest
     */
    static camel(string) {
        return this.trim(string)
            .toLowerCase()
            .split(' ')
            .reduce((acc, word, i) => acc + (i === 0 ? word : this.capitalize(word)), '');
    }
    /**
     * @function slugify
     * @description Slugifies a string
     * @param {String} str
     * @param {String} [del=-] Delimiter, defaults to '-'
     * @return {String} Slugified string
     * @example
     * slugify(' This is a tesT ')
     * // this-is-a-test
     * @example
     * slugify(' This is a tesT ', ':')
     * // this:is:a:test
     * @example
     * str(' This is a tesT ').slugify().value
     * // this-is-a-test
     */
    static slugify(str, sep = '-') {
        this.trim(str)
            .toLowerCase()
            .replace(/ /g, sep) // Cambio espacios por el separador
            .normalize('NFD') // Quito todas las tildes
            .replace(/[\u0300-\u036f]/g, '');
    }
    /**
     * @function count
     * @description Counts characters in a string
     * @param {String} str
     * @return {Number} Number of characters
     * @example
     * count('test')
     * // 4
     * @example
     * str('test').length
     * // 4
     * @example
     * str('test').count()
     * // 4
     */
    static count(str) {
        return String(str).length;
    }
    /**
     * @function endsWith
     * @description Checks if a string ends with the provided substring
     * @param {String} str
     * @param {String} substring
     * @param {Number} [pos=0] Position to start checking. Defaults to 0
     * @return {Boolean} True / False
     * @example
     * endsWith('test', 'st')
     * // true
     * @example
     * str('test').endsWith('st')
     * // true
     */
    static endsWith(str, substring, pos) {
        str = String(str);
        if (!pos || !isFinite(pos) || Math.floor(pos) !== pos || pos > str.length) {
            pos = str.length;
        }
        pos -= substring.length;
        const index = str.indexOf(substring, (pos - 1));
        return index !== -1 && index === pos;
    };
    /**
     * @function startsWith
     * @description Checks if a string starts with the provided substring
     * @param {String} str
     * @param {String} substring
     * @param {Number} [pos=0] Position to start checking. Defaults to 0
     * @return {Boolean} True / False
     * @example
     * startsWith('test', 'te')
     * // true
     * @example
     * str('test').startsWith('te')
     * // true
     */
    static startsWith (str, sub, pos) {
        return String(str).indexOf(sub, pos || 0) === (pos || 0);
    }

    /**
     * @function lower
     * @description Transform str to lower case
     * @param {String} str
     * @return {String} Lower cased string
     * @example
     * lower('TEST')
     * // test
     * @example
     * str('TEST').lower().value
     * // test
     */
    static lower(str) {
        return String(str).toLowerCase();
    }
    /**
     * @function upper
     * @description Transform a string to uppercase
     * @param {String} str
     * @return {String} Uppercased string
     * @example
     * upper('test')
     * // TEST
     * @example
     * str('test').upper().value
     * // TEST
     */
    static upper(str) {
        return String(str).toUpperCase();
    }

    /**
     * Converts the first character of each word in the input string to uppercase.
     *
     * @param {string} string - The input string containing words separated by spaces.
     * @return {string} A new string with the first letter of each word capitalized.
     */
    static capitalizeAll(string) {
        var stringArr = string.split(' ');
        for(var i = 0; i < stringArr.length; i++) {
            stringArr[i] = this.capitalize(stringArr[i]);
        }
        return stringArr.join(' ');
    }

    /**
     * Converts a snake_case string to camelCase.
     *
     * This function takes a string written in snake_case format and transforms it
     * to camelCase format by removing underscores and capitalizing the first letter
     * of each subsequent word after an underscore.
     *
     * @param {string} str - The snake_case string to be converted.
     * @returns {string} The converted camelCase string.
     */
    static snakeToCamel = (str: string) => str.replace(/_+(.?)/g, (_, p1) => p1.toUpperCase());

    /**
     * Converts a given string from camelCase or PascalCase to snake_case.
     *
     * This function processes the input string by:
     * 1. Converting the first uppercase character (if any) to lowercase.
     * 2. Identifying and replacing subsequent uppercase letters with their lowercase equivalent,
     *    prefixed by an underscore.
     *
     * @param {string} str - The input string to be converted to snake_case.
     * @returns {string} The converted string in snake_case format.
     */
    static snake = (str: string) => {
        return str
            .replace(/(^[A-Z])/, (_, p1) => p1.toLowerCase())
            .replace(/([A-Z]+)/g, (_, p1) => `_${p1.toLowerCase()}`);
    }
    /**
     * Function to determine if a given value is a plain object.
     *
     * This function checks if the provided value is classified
     * as an `Object` (i.e., a plain JavaScript object) using the
     * `Object.prototype.toString` method.
     *
     * @param {any} obj - The value to be checked.
     * @returns {boolean} Returns `true` if the value is a plain object,
     * otherwise returns `false`.
     */
    static detectObject = (obj: any) => {
        if (Object.prototype.toString.call(obj) === '[object Object]') {
            return true;
        }
        return false;
    };

    /**
     * Converts a given string into words by replacing underscores with spaces.
     * This method applies a snake_case transformation before replacing underscores.
     *
     * @param {string} str - The input string to transform.
     * @return {string} The transformed string with words separated by spaces.
     */
    static words(str) {
        //@ts-ignore
        return this.snake(str).replaceAll('_', ' ')
    }

    /**
     * Converts the given string into title case by capitalizing the first letter of each word.
     *
     * @param {string} str - The string to be converted into title case.
     * @return {string} The title-cased version of the input string.
     */
    static title(str) {
        return this.capitalizeAll(this.words(str))
    }


}
export default Str