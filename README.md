# Count Chocula

            _..._
          .'     '.
         ; __   __ ;
         |/  \ /  \|
       |\| -- ' -- |/|
       |(| \o| |o/ |)|
       _\|     >   |/_
    .-'  | ,.___., |  '-.
    \    ;  V'-'V  ;    /
     `\   \       /   /`
       `\  '-...-'  /`
         `\  / \  /`
     jgs   `\\_//`

Meet Count Chocula. He's an infuse plugin who provides a dynamically
updated character count for text fields. He runs on
text fields/textareas with a certain data-role.

## Usage

To summon the Count:

Add the following data-roles to your fields.

    <div class="field" data-role="countchocula">
      <label for="blah" data-role="countchocula_display">Blah</label>
      <input type="text" name="blah" data-role="countchocula_count" />
    </div>

You do not need to add the "[0]" to your label but you can if you want to.
