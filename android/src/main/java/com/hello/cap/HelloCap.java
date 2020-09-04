package com.hello.cap;

import android.util.Log;
import android.widget.Toast;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin
public class HelloCap extends Plugin {

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", value);
        call.success(ret);
    }

    @PluginMethod
    public String greet(String name) {
        Log.d("HelloCap", "greeting for " + name);
        String greetText = String.format("greeting %s", name);
        Toast.makeText(getContext(), greetText, Toast.LENGTH_SHORT).show();
        return greetText;
    }
}
