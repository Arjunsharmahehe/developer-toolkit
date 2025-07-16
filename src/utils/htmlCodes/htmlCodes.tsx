type HtmlCode = {
    name: string,
    htmlcode: string,
    aliases: string
}

// 345 HTML codes
// Source: I just prompted Claude. Gemini 2.5 pro just was not willing to do this.

export const htmlCodes: HtmlCode[] = [
  {
    "name": "Left Parenthesis",
    "htmlcode": "&#40;",
    "aliases": "opening parenthesis, left paren, open paren"
  },
  {
    "name": "Right Parenthesis",
    "htmlcode": "&#41;",
    "aliases": "closing parenthesis, right paren, close paren"
  },
  {
    "name": "Ampersand",
    "htmlcode": "&amp;",
    "aliases": "and sign, and symbol"
  },
  {
    "name": "Less Than",
    "htmlcode": "&lt;",
    "aliases": "left angle bracket, opening angle bracket, less than sign"
  },
  {
    "name": "Greater Than",
    "htmlcode": "&gt;",
    "aliases": "right angle bracket, closing angle bracket, greater than sign"
  },
  {
    "name": "Quotation Mark",
    "htmlcode": "&quot;",
    "aliases": "double quote, speech marks, quote mark"
  },
  {
    "name": "Apostrophe",
    "htmlcode": "&apos;",
    "aliases": "single quote, apostrophe, prime"
  },
  {
    "name": "Non-breaking Space",
    "htmlcode": "&nbsp;",
    "aliases": "hard space, fixed space, non-breaking space"
  },
  {
    "name": "Cent Sign",
    "htmlcode": "&cent;",
    "aliases": "cent symbol, cents"
  },
  {
    "name": "Pound Sign",
    "htmlcode": "&pound;",
    "aliases": "pound sterling, British pound, hash"
  },
  {
    "name": "Yen Sign",
    "htmlcode": "&yen;",
    "aliases": "yen symbol, Japanese yen"
  },
  {
    "name": "Euro Sign",
    "htmlcode": "&euro;",
    "aliases": "euro symbol, European currency"
  },
  {
    "name": "Copyright Sign",
    "htmlcode": "&copy;",
    "aliases": "copyright symbol, copyright notice"
  },
  {
    "name": "Registered Sign",
    "htmlcode": "&reg;",
    "aliases": "registered trademark, registered symbol"
  },
  {
    "name": "Trademark Sign",
    "htmlcode": "&trade;",
    "aliases": "trademark symbol, TM"
  },
  {
    "name": "Section Sign",
    "htmlcode": "&sect;",
    "aliases": "section symbol, silcrow"
  },
  {
    "name": "Degree Sign",
    "htmlcode": "&deg;",
    "aliases": "degree symbol, degrees"
  },
  {
    "name": "Plus-Minus Sign",
    "htmlcode": "&plusmn;",
    "aliases": "plus or minus, plus minus symbol"
  },
  {
    "name": "Multiplication Sign",
    "htmlcode": "&times;",
    "aliases": "times sign, multiply symbol, cross"
  },
  {
    "name": "Division Sign",
    "htmlcode": "&divide;",
    "aliases": "division symbol, divide sign, obelus"
  },
  {
    "name": "Fraction One Half",
    "htmlcode": "&frac12;",
    "aliases": "half, one half fraction"
  },
  {
    "name": "Fraction One Quarter",
    "htmlcode": "&frac14;",
    "aliases": "quarter, one quarter fraction"
  },
  {
    "name": "Fraction Three Quarters",
    "htmlcode": "&frac34;",
    "aliases": "three quarters, three quarter fraction"
  },
  {
    "name": "Superscript One",
    "htmlcode": "&sup1;",
    "aliases": "superscript 1, power of one"
  },
  {
    "name": "Superscript Two",
    "htmlcode": "&sup2;",
    "aliases": "superscript 2, squared, power of two"
  },
  {
    "name": "Superscript Three",
    "htmlcode": "&sup3;",
    "aliases": "superscript 3, cubed, power of three"
  },
  {
    "name": "Micro Sign",
    "htmlcode": "&micro;",
    "aliases": "micro symbol, mu"
  },
  {
    "name": "Pilcrow Sign",
    "htmlcode": "&para;",
    "aliases": "paragraph sign, paragraph symbol"
  },
  {
    "name": "Middle Dot",
    "htmlcode": "&middot;",
    "aliases": "middle dot, centered dot, bullet"
  },
  {
    "name": "Cedilla",
    "htmlcode": "&cedil;",
    "aliases": "cedilla accent"
  },
  {
    "name": "Ordinal Indicator Feminine",
    "htmlcode": "&ordf;",
    "aliases": "feminine ordinal indicator"
  },
  {
    "name": "Ordinal Indicator Masculine",
    "htmlcode": "&ordm;",
    "aliases": "masculine ordinal indicator"
  },
  {
    "name": "Left Guillemet",
    "htmlcode": "&laquo;",
    "aliases": "left angle quote, left guillemot, left chevron"
  },
  {
    "name": "Right Guillemet",
    "htmlcode": "&raquo;",
    "aliases": "right angle quote, right guillemot, right chevron"
  },
  {
    "name": "Inverted Question Mark",
    "htmlcode": "&iquest;",
    "aliases": "inverted question mark, upside down question mark"
  },
  {
    "name": "Inverted Exclamation Mark",
    "htmlcode": "&iexcl;",
    "aliases": "inverted exclamation mark, upside down exclamation mark"
  },
  {
    "name": "Broken Bar",
    "htmlcode": "&brvbar;",
    "aliases": "broken vertical bar, broken pipe"
  },
  {
    "name": "Macron",
    "htmlcode": "&macr;",
    "aliases": "macron accent, overline"
  },
  {
    "name": "Acute Accent",
    "htmlcode": "&acute;",
    "aliases": "acute accent mark"
  },
  {
    "name": "Diaeresis",
    "htmlcode": "&uml;",
    "aliases": "diaeresis, umlaut"
  },
  {
    "name": "Not Sign",
    "htmlcode": "&not;",
    "aliases": "not sign, negation"
  },
  {
    "name": "Soft Hyphen",
    "htmlcode": "&shy;",
    "aliases": "soft hyphen, discretionary hyphen"
  },
  {
    "name": "A with Grave",
    "htmlcode": "&agrave;",
    "aliases": "a grave accent, à"
  },
  {
    "name": "A with Acute",
    "htmlcode": "&aacute;",
    "aliases": "a acute accent, á"
  },
  {
    "name": "A with Circumflex",
    "htmlcode": "&acirc;",
    "aliases": "a circumflex accent, â"
  },
  {
    "name": "A with Tilde",
    "htmlcode": "&atilde;",
    "aliases": "a tilde accent, ã"
  },
  {
    "name": "A with Diaeresis",
    "htmlcode": "&auml;",
    "aliases": "a umlaut, ä"
  },
  {
    "name": "A with Ring",
    "htmlcode": "&aring;",
    "aliases": "a ring accent, å"
  },
  {
    "name": "AE Ligature",
    "htmlcode": "&aelig;",
    "aliases": "ae ligature, æ"
  },
  {
    "name": "C with Cedilla",
    "htmlcode": "&ccedil;",
    "aliases": "c cedilla, ç"
  },
  {
    "name": "E with Grave",
    "htmlcode": "&egrave;",
    "aliases": "e grave accent, è"
  },
  {
    "name": "E with Acute",
    "htmlcode": "&eacute;",
    "aliases": "e acute accent, é"
  },
  {
    "name": "E with Circumflex",
    "htmlcode": "&ecirc;",
    "aliases": "e circumflex accent, ê"
  },
  {
    "name": "E with Diaeresis",
    "htmlcode": "&euml;",
    "aliases": "e umlaut, ë"
  },
  {
    "name": "I with Grave",
    "htmlcode": "&igrave;",
    "aliases": "i grave accent, ì"
  },
  {
    "name": "I with Acute",
    "htmlcode": "&iacute;",
    "aliases": "i acute accent, í"
  },
  {
    "name": "I with Circumflex",
    "htmlcode": "&icirc;",
    "aliases": "i circumflex accent, î"
  },
  {
    "name": "I with Diaeresis",
    "htmlcode": "&iuml;",
    "aliases": "i umlaut, ï"
  },
  {
    "name": "Eth",
    "htmlcode": "&eth;",
    "aliases": "eth, Icelandic eth, ð"
  },
  {
    "name": "N with Tilde",
    "htmlcode": "&ntilde;",
    "aliases": "n tilde accent, ñ"
  },
  {
    "name": "O with Grave",
    "htmlcode": "&ograve;",
    "aliases": "o grave accent, ò"
  },
  {
    "name": "O with Acute",
    "htmlcode": "&oacute;",
    "aliases": "o acute accent, ó"
  },
  {
    "name": "O with Circumflex",
    "htmlcode": "&ocirc;",
    "aliases": "o circumflex accent, ô"
  },
  {
    "name": "O with Tilde",
    "htmlcode": "&otilde;",
    "aliases": "o tilde accent, õ"
  },
  {
    "name": "O with Diaeresis",
    "htmlcode": "&ouml;",
    "aliases": "o umlaut, ö"
  },
  {
    "name": "O with Stroke",
    "htmlcode": "&oslash;",
    "aliases": "o stroke, ø"
  },
  {
    "name": "U with Grave",
    "htmlcode": "&ugrave;",
    "aliases": "u grave accent, ù"
  },
  {
    "name": "U with Acute",
    "htmlcode": "&uacute;",
    "aliases": "u acute accent, ú"
  },
  {
    "name": "U with Circumflex",
    "htmlcode": "&ucirc;",
    "aliases": "u circumflex accent, û"
  },
  {
    "name": "U with Diaeresis",
    "htmlcode": "&uuml;",
    "aliases": "u umlaut, ü"
  },
  {
    "name": "Y with Acute",
    "htmlcode": "&yacute;",
    "aliases": "y acute accent, ý"
  },
  {
    "name": "Thorn",
    "htmlcode": "&thorn;",
    "aliases": "thorn, Icelandic thorn, þ"
  },
  {
    "name": "Sharp S",
    "htmlcode": "&szlig;",
    "aliases": "sharp s, German sharp s, eszett, ß"
  },
  {
    "name": "Capital A with Grave",
    "htmlcode": "&Agrave;",
    "aliases": "capital A grave accent, À"
  },
  {
    "name": "Capital A with Acute",
    "htmlcode": "&Aacute;",
    "aliases": "capital A acute accent, Á"
  },
  {
    "name": "Capital A with Circumflex",
    "htmlcode": "&Acirc;",
    "aliases": "capital A circumflex accent, Â"
  },
  {
    "name": "Capital A with Tilde",
    "htmlcode": "&Atilde;",
    "aliases": "capital A tilde accent, Ã"
  },
  {
    "name": "Capital A with Diaeresis",
    "htmlcode": "&Auml;",
    "aliases": "capital A umlaut, Ä"
  },
  {
    "name": "Capital A with Ring",
    "htmlcode": "&Aring;",
    "aliases": "capital A ring accent, Å"
  },
  {
    "name": "Capital AE Ligature",
    "htmlcode": "&AElig;",
    "aliases": "capital AE ligature, Æ"
  },
  {
    "name": "Capital C with Cedilla",
    "htmlcode": "&Ccedil;",
    "aliases": "capital C cedilla, Ç"
  },
  {
    "name": "Capital E with Grave",
    "htmlcode": "&Egrave;",
    "aliases": "capital E grave accent, È"
  },
  {
    "name": "Capital E with Acute",
    "htmlcode": "&Eacute;",
    "aliases": "capital E acute accent, É"
  },
  {
    "name": "Capital E with Circumflex",
    "htmlcode": "&Ecirc;",
    "aliases": "capital E circumflex accent, Ê"
  },
  {
    "name": "Capital E with Diaeresis",
    "htmlcode": "&Euml;",
    "aliases": "capital E umlaut, Ë"
  },
  {
    "name": "Capital I with Grave",
    "htmlcode": "&Igrave;",
    "aliases": "capital I grave accent, Ì"
  },
  {
    "name": "Capital I with Acute",
    "htmlcode": "&Iacute;",
    "aliases": "capital I acute accent, Í"
  },
  {
    "name": "Capital I with Circumflex",
    "htmlcode": "&Icirc;",
    "aliases": "capital I circumflex accent, Î"
  },
  {
    "name": "Capital I with Diaeresis",
    "htmlcode": "&Iuml;",
    "aliases": "capital I umlaut, Ï"
  },
  {
    "name": "Capital Eth",
    "htmlcode": "&ETH;",
    "aliases": "capital eth, capital Icelandic eth, Ð"
  },
  {
    "name": "Capital N with Tilde",
    "htmlcode": "&Ntilde;",
    "aliases": "capital N tilde accent, Ñ"
  },
  {
    "name": "Capital O with Grave",
    "htmlcode": "&Ograve;",
    "aliases": "capital O grave accent, Ò"
  },
  {
    "name": "Capital O with Acute",
    "htmlcode": "&Oacute;",
    "aliases": "capital O acute accent, Ó"
  },
  {
    "name": "Capital O with Circumflex",
    "htmlcode": "&Ocirc;",
    "aliases": "capital O circumflex accent, Ô"
  },
  {
    "name": "Capital O with Tilde",
    "htmlcode": "&Otilde;",
    "aliases": "capital O tilde accent, Õ"
  },
  {
    "name": "Capital O with Diaeresis",
    "htmlcode": "&Ouml;",
    "aliases": "capital O umlaut, Ö"
  },
  {
    "name": "Capital O with Stroke",
    "htmlcode": "&Oslash;",
    "aliases": "capital O stroke, Ø"
  },
  {
    "name": "Capital U with Grave",
    "htmlcode": "&Ugrave;",
    "aliases": "capital U grave accent, Ù"
  },
  {
    "name": "Capital U with Acute",
    "htmlcode": "&Uacute;",
    "aliases": "capital U acute accent, Ú"
  },
  {
    "name": "Capital U with Circumflex",
    "htmlcode": "&Ucirc;",
    "aliases": "capital U circumflex accent, Û"
  },
  {
    "name": "Capital U with Diaeresis",
    "htmlcode": "&Uuml;",
    "aliases": "capital U umlaut, Ü"
  },
  {
    "name": "Capital Y with Acute",
    "htmlcode": "&Yacute;",
    "aliases": "capital Y acute accent, Ý"
  },
  {
    "name": "Capital Thorn",
    "htmlcode": "&THORN;",
    "aliases": "capital thorn, capital Icelandic thorn, Þ"
  },
  {
    "name": "Y with Diaeresis",
    "htmlcode": "&yuml;",
    "aliases": "y umlaut, ÿ"
  },
  {
    "name": "Alpha",
    "htmlcode": "&alpha;",
    "aliases": "greek alpha, α"
  },
  {
    "name": "Beta",
    "htmlcode": "&beta;",
    "aliases": "greek beta, β"
  },
  {
    "name": "Gamma",
    "htmlcode": "&gamma;",
    "aliases": "greek gamma, γ"
  },
  {
    "name": "Delta",
    "htmlcode": "&delta;",
    "aliases": "greek delta, δ"
  },
  {
    "name": "Epsilon",
    "htmlcode": "&epsilon;",
    "aliases": "greek epsilon, ε"
  },
  {
    "name": "Zeta",
    "htmlcode": "&zeta;",
    "aliases": "greek zeta, ζ"
  },
  {
    "name": "Eta",
    "htmlcode": "&eta;",
    "aliases": "greek eta, η"
  },
  {
    "name": "Theta",
    "htmlcode": "&theta;",
    "aliases": "greek theta, θ"
  },
  {
    "name": "Iota",
    "htmlcode": "&iota;",
    "aliases": "greek iota, ι"
  },
  {
    "name": "Kappa",
    "htmlcode": "&kappa;",
    "aliases": "greek kappa, κ"
  },
  {
    "name": "Lambda",
    "htmlcode": "&lambda;",
    "aliases": "greek lambda, λ"
  },
  {
    "name": "Mu",
    "htmlcode": "&mu;",
    "aliases": "greek mu, μ"
  },
  {
    "name": "Nu",
    "htmlcode": "&nu;",
    "aliases": "greek nu, ν"
  },
  {
    "name": "Xi",
    "htmlcode": "&xi;",
    "aliases": "greek xi, ξ"
  },
  {
    "name": "Omicron",
    "htmlcode": "&omicron;",
    "aliases": "greek omicron, ο"
  },
  {
    "name": "Pi",
    "htmlcode": "&pi;",
    "aliases": "greek pi, π"
  },
  {
    "name": "Rho",
    "htmlcode": "&rho;",
    "aliases": "greek rho, ρ"
  },
  {
    "name": "Sigma",
    "htmlcode": "&sigma;",
    "aliases": "greek sigma, σ"
  },
  {
    "name": "Tau",
    "htmlcode": "&tau;",
    "aliases": "greek tau, τ"
  },
  {
    "name": "Upsilon",
    "htmlcode": "&upsilon;",
    "aliases": "greek upsilon, υ"
  },
  {
    "name": "Phi",
    "htmlcode": "&phi;",
    "aliases": "greek phi, φ"
  },
  {
    "name": "Chi",
    "htmlcode": "&chi;",
    "aliases": "greek chi, χ"
  },
  {
    "name": "Psi",
    "htmlcode": "&psi;",
    "aliases": "greek psi, ψ"
  },
  {
    "name": "Omega",
    "htmlcode": "&omega;",
    "aliases": "greek omega, ω"
  },
  {
    "name": "Capital Alpha",
    "htmlcode": "&Alpha;",
    "aliases": "capital greek alpha, Α"
  },
  {
    "name": "Capital Beta",
    "htmlcode": "&Beta;",
    "aliases": "capital greek beta, Β"
  },
  {
    "name": "Capital Gamma",
    "htmlcode": "&Gamma;",
    "aliases": "capital greek gamma, Γ"
  },
  {
    "name": "Capital Delta",
    "htmlcode": "&Delta;",
    "aliases": "capital greek delta, Δ"
  },
  {
    "name": "Capital Epsilon",
    "htmlcode": "&Epsilon;",
    "aliases": "capital greek epsilon, Ε"
  },
  {
    "name": "Capital Zeta",
    "htmlcode": "&Zeta;",
    "aliases": "capital greek zeta, Ζ"
  },
  {
    "name": "Capital Eta",
    "htmlcode": "&Eta;",
    "aliases": "capital greek eta, Η"
  },
  {
    "name": "Capital Theta",
    "htmlcode": "&Theta;",
    "aliases": "capital greek theta, Θ"
  },
  {
    "name": "Capital Iota",
    "htmlcode": "&Iota;",
    "aliases": "capital greek iota, Ι"
  },
  {
    "name": "Capital Kappa",
    "htmlcode": "&Kappa;",
    "aliases": "capital greek kappa, Κ"
  },
  {
    "name": "Capital Lambda",
    "htmlcode": "&Lambda;",
    "aliases": "capital greek lambda, Λ"
  },
  {
    "name": "Capital Mu",
    "htmlcode": "&Mu;",
    "aliases": "capital greek mu, Μ"
  },
  {
    "name": "Capital Nu",
    "htmlcode": "&Nu;",
    "aliases": "capital greek nu, Ν"
  },
  {
    "name": "Capital Xi",
    "htmlcode": "&Xi;",
    "aliases": "capital greek xi, Ξ"
  },
  {
    "name": "Capital Omicron",
    "htmlcode": "&Omicron;",
    "aliases": "capital greek omicron, Ο"
  },
  {
    "name": "Capital Pi",
    "htmlcode": "&Pi;",
    "aliases": "capital greek pi, Π"
  },
  {
    "name": "Capital Rho",
    "htmlcode": "&Rho;",
    "aliases": "capital greek rho, Ρ"
  },
  {
    "name": "Capital Sigma",
    "htmlcode": "&Sigma;",
    "aliases": "capital greek sigma, Σ"
  },
  {
    "name": "Capital Tau",
    "htmlcode": "&Tau;",
    "aliases": "capital greek tau, Τ"
  },
  {
    "name": "Capital Upsilon",
    "htmlcode": "&Upsilon;",
    "aliases": "capital greek upsilon, Υ"
  },
  {
    "name": "Capital Phi",
    "htmlcode": "&Phi;",
    "aliases": "capital greek phi, Φ"
  },
  {
    "name": "Capital Chi",
    "htmlcode": "&Chi;",
    "aliases": "capital greek chi, Χ"
  },
  {
    "name": "Capital Psi",
    "htmlcode": "&Psi;",
    "aliases": "capital greek psi, Ψ"
  },
  {
    "name": "Capital Omega",
    "htmlcode": "&Omega;",
    "aliases": "capital greek omega, Ω"
  },
  {
    "name": "Left Single Quotation Mark",
    "htmlcode": "&lsquo;",
    "aliases": "left single quote, opening single quote"
  },
  {
    "name": "Right Single Quotation Mark",
    "htmlcode": "&rsquo;",
    "aliases": "right single quote, closing single quote, apostrophe"
  },
  {
    "name": "Single Low-9 Quotation Mark",
    "htmlcode": "&sbquo;",
    "aliases": "single low quote, bottom single quote"
  },
  {
    "name": "Left Double Quotation Mark",
    "htmlcode": "&ldquo;",
    "aliases": "left double quote, opening double quote"
  },
  {
    "name": "Right Double Quotation Mark",
    "htmlcode": "&rdquo;",
    "aliases": "right double quote, closing double quote"
  },
  {
    "name": "Double Low-9 Quotation Mark",
    "htmlcode": "&bdquo;",
    "aliases": "double low quote, bottom double quote"
  },
  {
    "name": "Dagger",
    "htmlcode": "&dagger;",
    "aliases": "dagger symbol, cross"
  },
  {
    "name": "Double Dagger",
    "htmlcode": "&Dagger;",
    "aliases": "double dagger, double cross"
  },
  {
    "name": "Bullet",
    "htmlcode": "&bull;",
    "aliases": "bullet point, bullet symbol"
  },
  {
    "name": "Horizontal Ellipsis",
    "htmlcode": "&hellip;",
    "aliases": "ellipsis, three dots"
  },
  {
    "name": "Per Mille Sign",
    "htmlcode": "&permil;",
    "aliases": "per mille, per thousand"
  },
  {
    "name": "Prime",
    "htmlcode": "&prime;",
    "aliases": "prime symbol, minutes, feet"
  },
  {
    "name": "Double Prime",
    "htmlcode": "&Prime;",
    "aliases": "double prime, seconds, inches"
  },
  {
    "name": "Single Left Angle Quotation Mark",
    "htmlcode": "&lsaquo;",
    "aliases": "left single angle quote, left single guillemet"
  },
  {
    "name": "Single Right Angle Quotation Mark",
    "htmlcode": "&rsaquo;",
    "aliases": "right single angle quote, right single guillemet"
  },
  {
    "name": "Overline",
    "htmlcode": "&oline;",
    "aliases": "overline, spacing overscore"
  },
  {
    "name": "Fraction Slash",
    "htmlcode": "&frasl;",
    "aliases": "fraction slash, solidus"
  },
  {
    "name": "En Dash",
    "htmlcode": "&ndash;",
    "aliases": "en dash, short dash"
  },
  {
    "name": "Em Dash",
    "htmlcode": "&mdash;",
    "aliases": "em dash, long dash"
  },
  {
    "name": "Leftwards Arrow",
    "htmlcode": "&larr;",
    "aliases": "left arrow, leftward arrow"
  },
  {
    "name": "Upwards Arrow",
    "htmlcode": "&uarr;",
    "aliases": "up arrow, upward arrow"
  },
  {
    "name": "Rightwards Arrow",
    "htmlcode": "&rarr;",
    "aliases": "right arrow, rightward arrow"
  },
  {
    "name": "Downwards Arrow",
    "htmlcode": "&darr;",
    "aliases": "down arrow, downward arrow"
  },
  {
    "name": "Left Right Arrow",
    "htmlcode": "&harr;",
    "aliases": "left right arrow, horizontal arrow"
  },
  {
    "name": "Leftwards Double Arrow",
    "htmlcode": "&lArr;",
    "aliases": "left double arrow, leftward double arrow"
  },
  {
    "name": "Upwards Double Arrow",
    "htmlcode": "&uArr;",
    "aliases": "up double arrow, upward double arrow"
  },
  {
    "name": "Rightwards Double Arrow",
    "htmlcode": "&rArr;",
    "aliases": "right double arrow, rightward double arrow"
  },
  {
    "name": "Downwards Double Arrow",
    "htmlcode": "&dArr;",
    "aliases": "down double arrow, downward double arrow"
  },
  {
    "name": "Left Right Double Arrow",
    "htmlcode": "&hArr;",
    "aliases": "left right double arrow, horizontal double arrow"
  },
  {
    "name": "For All",
    "htmlcode": "&forall;",
    "aliases": "for all, universal quantifier"
  },
  {
    "name": "Partial Differential",
    "htmlcode": "&part;",
    "aliases": "partial differential, partial derivative"
  },
  {
    "name": "There Exists",
    "htmlcode": "&exist;",
    "aliases": "there exists, existential quantifier"
  },
  {
    "name": "Empty Set",
    "htmlcode": "&empty;",
    "aliases": "empty set, null set"
  },
  {
    "name": "Nabla",
    "htmlcode": "&nabla;",
    "aliases": "nabla, del operator"
  },
  {
    "name": "Element Of",
    "htmlcode": "&isin;",
    "aliases": "element of, in set"
  },
  {
    "name": "Not An Element Of",
    "htmlcode": "&notin;",
    "aliases": "not an element of, not in set"
  },
  {
    "name": "Contains As Member",
    "htmlcode": "&ni;",
    "aliases": "contains as member, owns"
  },
  {
    "name": "Product",
    "htmlcode": "&prod;",
    "aliases": "product symbol, n-ary product"
  },
  {
    "name": "Sum",
    "htmlcode": "&sum;",
    "aliases": "sum symbol, n-ary summation"
  },
  {
    "name": "Minus Sign",
    "htmlcode": "&minus;",
    "aliases": "minus sign, subtraction"
  },
  {
    "name": "Asterisk Operator",
    "htmlcode": "&lowast;",
    "aliases": "asterisk operator, low asterisk"
  },
  {
    "name": "Square Root",
    "htmlcode": "&radic;",
    "aliases": "square root, radical sign"
  },
  {
    "name": "Proportional To",
    "htmlcode": "&prop;",
    "aliases": "proportional to, proportionality"
  },
  {
    "name": "Infinity",
    "htmlcode": "&infin;",
    "aliases": "infinity symbol, infinite"
  },
  {
    "name": "Angle",
    "htmlcode": "&ang;",
    "aliases": "angle symbol"
  },
  {
    "name": "Logical And",
    "htmlcode": "&and;",
    "aliases": "logical and, wedge"
  },
  {
    "name": "Logical Or",
    "htmlcode": "&or;",
    "aliases": "logical or, vee"
  },
  {
    "name": "Intersection",
    "htmlcode": "&cap;",
    "aliases": "intersection, cap"
  },
  {
    "name": "Union",
    "htmlcode": "&cup;",
    "aliases": "union, cup"
  },
  {
    "name": "Integral",
    "htmlcode": "&int;",
    "aliases": "integral symbol"
  },
  {
    "name": "Therefore",
    "htmlcode": "&there4;",
    "aliases": "therefore, three dots"
  },
  {
    "name": "Tilde Operator",
    "htmlcode": "&sim;",
    "aliases": "tilde operator, similar to"
  },
  {
    "name": "Congruent To",
    "htmlcode": "&cong;",
    "aliases": "congruent to, approximately equal"
  },
  {
    "name": "Almost Equal To",
    "htmlcode": "&asymp;",
    "aliases": "almost equal to, asymptotic to"
  },
  {
    "name": "Not Equal To",
    "htmlcode": "&ne;",
    "aliases": "not equal to, not equals"
  },
  {
    "name": "Identical To",
    "htmlcode": "&equiv;",
    "aliases": "identical to, equivalent to"
  },
  {
    "name": "Less Than Or Equal To",
    "htmlcode": "&le;",
    "aliases": "less than or equal to, less than or equal"
  },
  {
    "name": "Greater Than Or Equal To",
    "htmlcode": "&ge;",
    "aliases": "greater than or equal to, greater than or equal"
  },
  {
    "name": "Subset Of",
    "htmlcode": "&sub;",
    "aliases": "subset of, subset"
  },
  {
    "name": "Superset Of",
    "htmlcode": "&sup;",
    "aliases": "superset of, superset"
  },
  {
    "name": "Not A Subset Of",
    "htmlcode": "&nsub;",
    "aliases": "not a subset of, not subset"
  },
  {
    "name": "Subset Of Or Equal To",
    "htmlcode": "&sube;",
    "aliases": "subset of or equal to, subset or equal"
  },
  {
    "name": "Superset Of Or Equal To",
    "htmlcode": "&supe;",
    "aliases": "superset of or equal to, superset or equal"
  },
  {
    "name": "Circled Plus",
    "htmlcode": "&oplus;",
    "aliases": "circled plus, direct sum"
  },
  {
    "name": "Circled Times",
    "htmlcode": "&otimes;",
    "aliases": "circled times, tensor product"
  },
  {
    "name": "Up Tack",
    "htmlcode": "&perp;",
    "aliases": "up tack, perpendicular"
  },
  {
    "name": "Dot Operator",
    "htmlcode": "&sdot;",
    "aliases": "dot operator, bullet operator"
  },
  {
    "name": "Left Ceiling",
    "htmlcode": "&lceil;",
    "aliases": "left ceiling, ceiling function"
  },
  {
    "name": "Right Ceiling",
    "htmlcode": "&rceil;",
    "aliases": "right ceiling, ceiling function"
  },
  {
    "name": "Left Floor",
    "htmlcode": "&lfloor;",
    "aliases": "left floor, floor function"
  },
  {
    "name": "Right Floor",
    "htmlcode": "&rfloor;",
    "aliases": "right floor, floor function"
  },
  {
    "name": "Left Angle Bracket",
    "htmlcode": "&lang;",
    "aliases": "left angle bracket, left chevron"
  },
  {
    "name": "Right Angle Bracket",
    "htmlcode": "&rang;",
    "aliases": "right angle bracket, right chevron"
  },
  {
    "name": "Lozenge",
    "htmlcode": "&loz;",
    "aliases": "lozenge, diamond"
  },
  {
    "name": "Black Spade Suit",
    "htmlcode": "&spades;",
    "aliases": "spade suit, spades"
  },
  {
    "name": "Black Club Suit",
    "htmlcode": "&clubs;",
    "aliases": "club suit, clubs"
  },
  {
    "name": "Black Heart Suit",
    "htmlcode": "&hearts;",
    "aliases": "heart suit, hearts"
  },
  {
    "name": "Black Diamond Suit",
    "htmlcode": "&diams;",
    "aliases": "diamond suit, diamonds"
  },
  {
    "name": "Space",
    "htmlcode": "&#32;",
    "aliases": "space character, blank space"
  },
  {
    "name": "Exclamation Mark",
    "htmlcode": "&#33;",
    "aliases": "exclamation point, exclamation"
  },
  {
    "name": "Number Sign",
    "htmlcode": "&#35;",
    "aliases": "hash, pound sign, number sign"
  },
  {
    "name": "Dollar Sign",
    "htmlcode": "&#36;",
    "aliases": "dollar symbol, currency"
  },
  {
    "name": "Percent Sign",
    "htmlcode": "&#37;",
    "aliases": "percent symbol, percentage"
  },
  {
    "name": "Asterisk",
    "htmlcode": "&#42;",
    "aliases": "asterisk, star"
  },
  {
    "name": "Plus Sign",
    "htmlcode": "&#43;",
    "aliases": "plus symbol, addition"
  },
  {
    "name": "Comma",
    "htmlcode": "&#44;",
    "aliases": "comma punctuation"
  },
  {
    "name": "Hyphen-Minus",
    "htmlcode": "&#45;",
    "aliases": "hyphen, minus, dash"
  },
  {
    "name": "Full Stop",
    "htmlcode": "&#46;",
    "aliases": "period, dot, decimal point"
  },
  {
    "name": "Solidus",
    "htmlcode": "&#47;",
    "aliases": "forward slash, slash, division"
  },
  {
    "name": "Colon",
    "htmlcode": "&#58;",
    "aliases": "colon punctuation"
  },
  {
    "name": "Semicolon",
    "htmlcode": "&#59;",
    "aliases": "semicolon punctuation"
  },
  {
    "name": "Equals Sign",
    "htmlcode": "&#61;",
    "aliases": "equals, equal sign"
  },
  {
    "name": "Question Mark",
    "htmlcode": "&#63;",
    "aliases": "question mark, query"
  },
  {
    "name": "Commercial At",
    "htmlcode": "&#64;",
    "aliases": "at sign, at symbol"
  },
  {
    "name": "Left Square Bracket",
    "htmlcode": "&#91;",
    "aliases": "left bracket, opening square bracket"
  },
  {
    "name": "Reverse Solidus",
    "htmlcode": "&#92;",
    "aliases": "backslash, reverse slash"
  },
  {
    "name": "Right Square Bracket",
    "htmlcode": "&#93;",
    "aliases": "right bracket, closing square bracket"
  },
  {
    "name": "Circumflex Accent",
    "htmlcode": "&#94;",
    "aliases": "caret, circumflex, hat"
  },
  {
    "name": "Low Line",
    "htmlcode": "&#95;",
    "aliases": "underscore, underline"
  },
  {
    "name": "Grave Accent",
    "htmlcode": "&#96;",
    "aliases": "grave accent, backtick"
  },
  {
    "name": "Left Curly Bracket",
    "htmlcode": "&#123;",
    "aliases": "left brace, opening curly bracket"
  },
  {
    "name": "Vertical Line",
    "htmlcode": "&#124;",
    "aliases": "vertical bar, pipe"
  },
  {
    "name": "Right Curly Bracket",
    "htmlcode": "&#125;",
    "aliases": "right brace, closing curly bracket"
  },
  {
    "name": "Tilde",
    "htmlcode": "&#126;",
    "aliases": "tilde accent, tilde"
  },
  {
    "name": "Zero Width Non-Joiner",
    "htmlcode": "&zwnj;",
    "aliases": "zero width non-joiner, ZWNJ"
  },
  {
    "name": "Zero Width Joiner",
    "htmlcode": "&zwj;",
    "aliases": "zero width joiner, ZWJ"
  },
  {
    "name": "Left-to-Right Mark",
    "htmlcode": "&lrm;",
    "aliases": "left-to-right mark, LRM"
  },
  {
    "name": "Right-to-Left Mark",
    "htmlcode": "&rlm;",
    "aliases": "right-to-left mark, RLM"
  },
  {
    "name": "Function",
    "htmlcode": "&fnof;",
    "aliases": "function, florin"
  },
  {
    "name": "Modifier Letter Circumflex Accent",
    "htmlcode": "&circ;",
    "aliases": "modifier circumflex, spacing circumflex"
  },
  {
    "name": "Small Tilde",
    "htmlcode": "&tilde;",
    "aliases": "small tilde, spacing tilde"
  },
  {
    "name": "En Quad",
    "htmlcode": "&ensp;",
    "aliases": "en quad, en space"
  },
  {
    "name": "Em Quad",
    "htmlcode": "&emsp;",
    "aliases": "em quad, em space"
  },
  {
    "name": "Thin Space",
    "htmlcode": "&thinsp;",
    "aliases": "thin space, hair space"
  },
  {
    "name": "Zero Width Non-Breaking Space",
    "htmlcode": "&zwnbsp;",
    "aliases": "zero width non-breaking space, ZWNBSP"
  },
  {
    "name": "Script Capital I",
    "htmlcode": "&image;",
    "aliases": "script capital I, imaginary part"
  },
  {
    "name": "Script Capital P",
    "htmlcode": "&weierp;",
    "aliases": "script capital P, Weierstrass p"
  },
  {
    "name": "Script Capital R",
    "htmlcode": "&real;",
    "aliases": "script capital R, real part"
  },
  {
    "name": "Alef Symbol",
    "htmlcode": "&alefsym;",
    "aliases": "alef symbol, first transfinite cardinal"
  },
  {
    "name": "Leftwards Arrow with Hook",
    "htmlcode": "&crarr;",
    "aliases": "leftwards arrow with hook, carriage return"
  },
  {
    "name": "Large Left Parenthesis",
    "htmlcode": "&#8261;",
    "aliases": "large left parenthesis, left paren"
  },
  {
    "name": "Large Right Parenthesis",
    "htmlcode": "&#8262;",
    "aliases": "large right parenthesis, right paren"
  },
  {
    "name": "Left White Parenthesis",
    "htmlcode": "&#10630;",
    "aliases": "left white parenthesis, white left paren"
  },
  {
    "name": "Right White Parenthesis",
    "htmlcode": "&#10631;",
    "aliases": "right white parenthesis, white right paren"
  }
]